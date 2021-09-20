import { CatsType, DogsType } from 'enums/actionTypes'
import { Breed } from 'enums/breed'
import { AnyAction } from 'redux'

const initialState: any = {
    catsBreed: [],
    dogsBreed: []
}

const breedsReducer = (state = initialState, action: AnyAction) => {
    switch (action.type) {

        case CatsType.GET_CAT_BREED_LIST:
            return {
                ...state,
                [Breed.CATS]: [...action.payload]
            }

        case DogsType.GET_DOG_BREED_LIST:
            return {
                ...state,
                [Breed.DOGS]: [...action.payload]
            }

        default:
            return state
    }
}

export default breedsReducer