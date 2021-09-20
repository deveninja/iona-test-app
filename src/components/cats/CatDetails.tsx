import { getCat } from 'actions'
import { Cat, CatList } from 'interfaces/cat'
import React, { useEffect, useMemo, useState } from 'react'
import { Button } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { RouteComponentProps } from 'react-router'
import { AppState } from 'store'


const CatDetails: React.FC<RouteComponentProps> = (props: RouteComponentProps) => {

    const { params }: any = props.match
    const { id, breed } = params
    const { prevPath }: any = props.location.state

    const initialCatState: Cat = useMemo(() => ({ id: '', url: '' }), [])

    const [cat, setCat] = useState<Cat>(initialCatState)
    const cats = useSelector<AppState, CatList>(state => state.catsReducer)
    const dispatch = useDispatch()

    /**
     * =======================================================================
     * @description - This block will solve if the single view should call
     * the api endpoint or not without adding complexity in the action types
     * inside the reducer
     * =======================================================================
     */

    useEffect(() => {
        console.log(prevPath)
        if (cats[breed]?.[id]) {
            setCat(cats[breed][id])
        }

        if (!cats[breed]?.[id]) {
            dispatch(getCat(id, breed))

        }

    }, [dispatch, breed, cats, id, prevPath])

    console.log(props.location)
    /** ===================================================================== */

    return (
        <div className="App">
            <img src={cat?.url} height={'50%'} width={'50%'} alt="Cat" />
            {cat?.breeds?.[0]?.name}
            <Button variant="secondary" onClick={() => props.history.push(`${prevPath}`)}>Go Back</Button>
        </div>
    )
}

export default CatDetails