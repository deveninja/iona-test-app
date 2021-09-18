import { getCat } from 'actions'
import Notification from 'components/common/Notification'
import { Cat, CatList } from 'interfaces/cat'
import React, { useEffect, useMemo, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { RouteComponentProps } from 'react-router'
import { AppState } from 'store'


const CatDetails: React.FC<RouteComponentProps> = (props: RouteComponentProps) => {

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
    console.log(props)
    console.log(props.match)
    console.log(props.match.params)

    useEffect(() => {
        if (cats['h19-vtIeX']) {
            setCat(cats['h19-vtIeX'])
        }

        if (!cats['h19-vtIeX']) {
            dispatch(getCat('h19-vtIeX'))
        }

    }, [dispatch, cats])

    /** ===================================================================== */

    return (
        <div className="App">
            <Notification />
            <img src={cat?.url} height={'50%'} width={'50%'} alt="Cat" />
            {cat?.breeds?.[0]?.name}
        </div>
    )
}

export default CatDetails