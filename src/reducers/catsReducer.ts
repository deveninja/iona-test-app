import { CatsType } from 'enums/actionTypes'
import { _delete, _mapKeys, } from 'helpers/objectHelper'
import { CatList } from 'interfaces/cat'
import { AnyAction } from 'redux'

const initialState: CatList = {}

const catsReducer = (state = initialState, action: AnyAction) => {
    switch (action.type) {

        case CatsType.GET_CAT_BREED:
            return {
                ...state,
                [action.payload.id]: { ..._mapKeys({ ...state[action.payload.id] }, action.payload.data) }
            }

        case CatsType.GET_CAT:
            return {
                ...state,
                [action.payload.id]: { [action.payload.data.id]: action.payload.data }
            }

        case CatsType.ADD_CAT:
            return {
                ...state,
                [action.payload.id]: { [action.payload.data.id]: action.payload.data }
            }

        case CatsType.EDIT_CAT:
            return {
                ...state,
                [action.payload.id]: { [action.payload.data.id]: action.payload.data }
            }

        case CatsType.DELETE_CAT:
            return _delete(state, action.payload)

        default:
            return state
    }
}

export default catsReducer