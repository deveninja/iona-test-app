import { getCatBreed, getCatBreedList } from 'actions'
import CardComponent from 'components/common/card/Card'
import DropDown from 'components/common/dropdown/DropDownList'
import SpinnerComponent from 'components/common/snipper/Spinner'
import { Breed } from 'enums/breed'
import { AppRoute } from 'enums/route'
import { useMemo, useEffect, useState, useCallback } from 'react'
import { Alert, Button, Col, Row } from 'react-bootstrap'
import { useSelector, useDispatch } from 'react-redux'
import { RouteComponentProps } from 'react-router-dom'
import { AppState } from 'store'

import styles from './cat.module.scss'

const CatList: React.FC<RouteComponentProps> = (props: RouteComponentProps) => {
    const [currentBreed, setCurrentBreed] = useState('')
    const [limit,] = useState(10)
    const catsBreedList: any = useSelector<AppState, any>(state => state.breedsReducer[Breed.CATS])
    const cats = useSelector<AppState, any>(state => state.catsReducer)
    const loading = useSelector<AppState, boolean>(state => state.globalReducer.loadingState)

    const dispatch = useDispatch()

    const {
        history,
        match: {
            params: {
                breed
            }
        }
    }: any = props


    // Memoise 
    const showBtn = useMemo(() => {
        const len = cats[currentBreed] ? Object.values(cats[currentBreed]).length : 0
        return catsBreedList?.[breed]?.page > 3 || len >= 15 || catsBreedList?.[breed]?.final

    }, [catsBreedList, breed, cats, currentBreed])


    const page = useMemo(() => (catsBreedList?.[breed]?.page ?? 1), [catsBreedList, breed])
    const options = useMemo(() => (catsBreedList ?? []), [catsBreedList])


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


    // onchange handler that sets the current breed selected and modifies
    // the route
    const onSelectBreed = (e: Event) => {
        const { value }: any = e.target
        setCurrentBreed(value)
        history.push(`${AppRoute.Cats}/${value}`)
    }


    useEffect(() => {

        if (!Object.values(catsBreedList).length) {
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
                dispatch(getCatBreed({ id: currentBreed, limit, page }))
            }

        }

    }, [dispatch, currentBreed, cats, limit, page])
    /** ===================================================================== */


    useEffect(() => {
        setCurrentBreed(breed)
    }, [breed])



    /**
     * @SPECS
     * data-testid="pageHeading"
     * data-testid="breedDropdown"
     * data-testid="breedMoreBtn"
     * data-testid="returnHomeBtn"
     * data-testid="listSection"
     */

    return (
        <div className={styles.catList}>
            <Row>
                <span data-testid="pageHeading" className={styles.title}>Cat Browser</span>
            </Row>
            <div className={styles.wrapper}>
                <Row>
                    <Col lg={3}>
                        <div className={`${styles.paddedFlex} ${styles.selectArea}`}>
                            <div>
                                <DropDown
                                    data-testid="breedDropdown"
                                    options={Object.values(options)}
                                    onChange={onSelectBreed}
                                    selected={currentBreed}
                                />
                                {
                                    !showBtn &&
                                    breed &&
                                    <Button
                                        data-testid="breedMoreBtn"
                                        variant="secondary"
                                        onClick={() => dispatch(
                                            getCatBreed({
                                                id: currentBreed,
                                                page,
                                            })
                                        )}
                                    >
                                        Load more {`${catsBreedList[breed]?.name} breed` ?? 'cats'}
                                    </Button>
                                }

                            </div>
                            <Button
                                data-testid="returnHomeBtn"
                                variant="secondary"
                                onClick={() => history.push(`${AppRoute.Home}`)}
                            >
                                Back to Home
                            </Button>
                        </div>
                    </Col>
                    <Col lg={9}>
                        <div
                            data-testid="listSection"
                            className={`${styles.paddedFlex} 
                            ${styles.contentArea}`}
                        >
                            {
                                // If the result has length of more then 0
                                cats?.[currentBreed] &&
                                Object.values(cats?.[currentBreed]).length > 0 &&
                                renderCats(cats[currentBreed])
                            }

                            {
                                // If After calling the api and the the result count
                                // is ZERO
                                cats?.[currentBreed] &&
                                Object.values(cats?.[currentBreed]).length < 1 &&
                                <Alert key={Date.now()} variant={'warning'}>
                                    No Cats found in our database.
                                </Alert>
                            }

                            {
                                // While calling the endpoint
                                loading && !cats?.[currentBreed]?.length &&
                                <SpinnerComponent message="Loading list" />
                            }

                        </div>
                    </Col>
                </Row>
            </div>
        </div>
    )
}

export default CatList
