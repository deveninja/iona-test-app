import { getCatBreed, getCatBreedList } from 'actions'
import CardComponent from 'components/common/card/Card'
import DropDown from 'components/common/dropdown/DropDownList'
import SpinnerComponent from 'components/common/snipper/Spinner'
import { AppRoute } from 'enums/route'
import { DropDownType } from 'interfaces/dropdown'
import { useMemo, useEffect, useState, useCallback } from 'react'
import { Button, Col, Row } from 'react-bootstrap'
import { useSelector, useDispatch } from 'react-redux'
import { RouteComponentProps } from 'react-router-dom'
import { AppState } from 'store'

import styles from './cat.module.scss'

const CatList: React.FC<RouteComponentProps> = (props: RouteComponentProps) => {
    const [currentBreed, setCurrentBreed] = useState('')
    const catsBreedList: DropDownType[] = useSelector<AppState, DropDownType[]>(state => state.breedsReducer.catsBreed)
    const cats = useSelector<AppState, any>(state => state.catsReducer)
    const loading = useSelector<AppState, boolean>(state => state.globalReducer.loadingState)

    const dispatch = useDispatch()

    const { match, history } = props
    const { breed }: any = match.params


    // Renders the cat card components
    const renderCats = useCallback((data: any) => {
        return (
            Object.values(data).map((i: any) => {
                return (
                    <CardComponent
                        key={i?.id}
                        imgSrc={i?.url}
                        size="23%"
                        btnLabel={`Have a closer look`}
                        link={{
                            to: `${AppRoute.Cats}/${currentBreed}/${i?.id}`,
                            prevPath: `${AppRoute.Cats}/${currentBreed}`
                        }}
                    />
                )
            })
        )
    }, [currentBreed])

    const options: DropDownType[] = useMemo(() => (catsBreedList ?? []), [catsBreedList])

    // onchange handler that sets the current breed selected and modifies
    // the route
    const onSelectBreed = (e: Event) => {
        const { value }: any = e.target
        setCurrentBreed(value)
        history.push(`${AppRoute.Cats}/${value}`)
    }


    useEffect(() => {

        if (!catsBreedList.length) {
            dispatch(getCatBreedList())
        }

    }, [dispatch, catsBreedList])


    /**
     * =======================================================================
     * @description - This block will solve if the breed view should call
     * the api endpoint or not without adding complexity in the action types
     * inside the reducer
     * =======================================================================
     */
    useEffect(() => {
        if (currentBreed) {
            if (!cats?.[currentBreed]) {
                dispatch(getCatBreed({ id: currentBreed }))
            }
        }
    }, [dispatch, currentBreed, cats])
    /** ===================================================================== */


    useEffect(() => {
        setCurrentBreed(breed)
    }, [breed])



    return (
        <div className={styles.catList}>
            <Row>
                <span className={styles.title}>Cat Browser</span>
            </Row>
            <div className={styles.wrapper}>
                <Row>
                    <Col lg={3}>
                        <div className={`${styles.paddedFlex} ${styles.selectArea}`}>
                            <DropDown
                                options={options}
                                onChange={onSelectBreed}
                                selected={currentBreed}
                            />
                            <Button variant="secondary" onClick={() => history.push(`${AppRoute.Home}`)}>Go Back</Button>
                        </div>
                    </Col>
                    <Col lg={9}>
                        <div className={`${styles.paddedFlex} ${styles.listArea}`}>
                            {
                                cats?.[currentBreed] &&
                                Object.values(cats?.[currentBreed]).length &&
                                renderCats(cats[currentBreed])
                            }

                            {
                                loading && !cats?.[currentBreed]?.length &&
                                <SpinnerComponent />
                            }

                        </div>
                    </Col>
                </Row>
            </div>
        </div>
    )
}

export default CatList
