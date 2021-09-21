import { getCat } from 'actions'
import { Cat, CatList } from 'interfaces/cat'
import React, { useEffect, useMemo, useState } from 'react'
import { Button, Col, Row } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { RouteComponentProps } from 'react-router'
import { AppState } from 'store'

import styles from './cat.module.scss'

const CatDetails: React.FC<RouteComponentProps> = (props: RouteComponentProps) => {

    const initialCatState: Cat = useMemo(() => ({ id: '', url: '' }), [])

    const [cat, setCat] = useState<Cat>(initialCatState)
    const cats = useSelector<AppState, CatList>(state => state.catsReducer)
    const dispatch = useDispatch()

    const {
        history,
        match: {
            params: {
                id,
                breed
            }
        },
        location: {
            state: {
                prevPath
            }
        }
    }: any = props

    /**
     * =======================================================================
     * @description - This block will solve if the single view should call
     * the api endpoint or not without adding complexity in the action types
     * inside the reducer
     * =======================================================================
     */

    useEffect(() => {

        if (cats[breed]?.[id]) {
            setCat(cats[breed][id])
        }

        if (!cats[breed]?.[id]) {
            dispatch(getCat(id, breed))
        }

    }, [dispatch, breed, cats, id, prevPath])

    /** ===================================================================== */

    /**
     * @SPECS
     * data-testid="backBtn"
     * data-testid="imageSection"
     * data-testid="breedName"
     * data-testid="breedDescription"
     */
    return (
        // <div className="App">

        //     <img src={cat?.url} height={'50%'} width={'50%'} alt="Cat" />
        //     {cat?.breeds?.[0]?.name}
        //     <Button
        //         variant="secondary"
        //         onClick={() => history.push(`${prevPath}`)}
        //     >
        //         Go Back
        //     </Button>
        // </div>
        <div className={styles.catList}>
            <Row>
                <span data-testid="pageHeading" className={styles.title}>{cat?.breeds?.[0]?.name ?? 'The Cat'}</span>
            </Row>
            <div className={styles.wrapper}>
                <Row>
                    <Col lg={3}>
                        <div className={`${styles.paddedFlex} ${styles.selectArea}`}>
                            <div className={styles.detailSection}>
                                <Row>
                                    <Col>
                                        <span className={styles.subTitle}>Origin: </span>
                                        <p>{cat?.breeds?.[0]?.origin}</p>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col>
                                        <span className={styles.subTitle}>Temparament: </span>
                                        <p>{cat?.breeds?.[0]?.temperament}</p>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col>
                                        <span className={styles.subTitle}>Description:</span>
                                        <p>{cat?.breeds?.[0]?.description}</p>
                                    </Col>
                                </Row>
                            </div>
                            <Button
                                data-testid="returnHomeBtn"
                                variant="secondary"
                                onClick={() => history.push(`${prevPath}`)}
                            >
                                Back to list
                            </Button>
                        </div>
                    </Col>
                    <Col lg={9}>
                        <div
                            data-testid="listSection"
                            className={`${styles.paddedFlex} 
                            ${styles.contentArea}`}
                        >
                            <img
                                className={styles.singeCat}
                                src={cat?.url ?? ''}
                                alt={`${cat?.breeds?.[0]?.name} cat`}
                            />


                        </div>
                    </Col>
                </Row>
            </div>
        </div>
    )
}

export default CatDetails