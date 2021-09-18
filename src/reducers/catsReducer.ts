import { CatsType } from 'enums/actionTypes'
import { _delete, _mapKeys } from 'helpers/objectHelper'
import { CatList } from 'interfaces/cat'

const initialState: CatList = {}

const catsReducer = (state = initialState, action: any) => {
    switch (action.type) {

        case CatsType.GET_CAT_BREED:
            return {
                ..._mapKeys({ ...state }, action.payload)
            }

        case CatsType.GET_CAT:
            return {
                ...state,
                [action.payload.id]: action.payload
            }

        case CatsType.ADD_CAT:
            return {
                ...state,
                [action.payload.id]: action.payload
            }

        case CatsType.EDIT_CAT:
            return {
                ...state,
                [action.payload.id]: action.payload
            }

        case CatsType.DELETE_CAT:
            return _delete(state, action.payload)

        default:
            return state
    }
}

export default catsReducer