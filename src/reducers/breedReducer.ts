import { BreedType, CatsType, DogsType } from 'enums/actionTypes'
import { Breed } from 'enums/breed'
import { _mapKeys } from 'helpers/objectHelper'
import { AnyAction } from 'redux'

const initialState: any = {
    [Breed.CATS]: {},
    [Breed.DOGS]: {}
}

const breedsReducer = (state = initialState, action: AnyAction) => {
    switch (action.type) {

        case CatsType.GET_CAT_BREED_LIST:
            return {
                ...state,
                [Breed.CATS]: {
                    ..._mapKeys({ ...state[Breed.CATS] }, action.payload)
                }
            }
        case BreedType.BREED_LIST_INCREMENT:
            return {
                ...state,
                [Breed.CATS]: {
                    ...state[Breed.CATS],
                    [action.payload.breed_id]: {
                        ...state[Breed.CATS][action.payload.breed_id],
                        ...action.payload,
                        page: ++action.payload.page
                    }
                }
            }

        case BreedType.BREED_LIST_FINAL:
            return {
                ...state,
                [Breed.CATS]: {
                    ...state[Breed.CATS],
                    [action.payload.breed_id]: {
                        ...state[Breed.CATS][action.payload.breed_id],
                        ...action.payload
                    }
                }

            }

        case DogsType.GET_DOG_BREED_LIST:
            return {
                ...state,
                [Breed.DOGS]: {
                    ..._mapKeys({ ...state[Breed.DOGS] }, action.payload)
                }
            }

        default:
            return state
    }
}

export default breedsReducer