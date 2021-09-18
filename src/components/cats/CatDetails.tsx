import { getCat } from 'actions'
import { Cat } from 'interfaces/cat'
import { useEffect, useMemo, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { AppState } from 'store'



const CatDetails: React.FC = () => {

    const initialCatState: Cat = useMemo(() => ({ id: '', url: '' }), [])

    const [cat, setCat] = useState<Cat>(initialCatState)
    const cats = useSelector<AppState, { [key: string]: Cat }>(state => state.catsReducer)
    const dispatch = useDispatch()

    /**
     * =======================================================================
     * @description - This block will solve if the single view should call
     * the api endpoint or not without adding complexity in the action types
     * inside the reducer
     * =======================================================================
     */

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
            <img src={cat?.url} height={'50%'} width={'50%'} alt="Cat" />
            {cat?.breeds?.[0]?.name}
        </div>
    )
}

export default CatDetails