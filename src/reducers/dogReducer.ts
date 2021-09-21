import { DogsType } from 'enums/actionTypes'
import { _delete } from 'helpers/objectHelper'
import { DogList } from 'interfaces/dog'
import { AnyAction } from 'redux'

const initialState: DogList = {}

const dogsReducer = (state = initialState, action: AnyAction) => {
    switch (action.type) {

        case DogsType.GET_DOG_BREED:
            return { ...state, images: action.payload }

        case DogsType.GET_DOG:
            return state

        case DogsType.ADD_DOG:
            return state

        case DogsType.EDIT_DOG:
            return state

        case DogsType.DELETE_DOG:
            return _delete(state, action.payload)

        default:
            return state
    }
}

export default dogsReducer