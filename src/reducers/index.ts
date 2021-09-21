/**
* ====================================================================
* @description Main reducer file that contains imported reducers
* @returns root reducer
* ====================================================================
*/


/** IMPORT DEPENDENCIES */
import { combineReducers } from 'redux'


/** IMPORT REDUCERS */
import catsReducer from 'reducers/catReducer'
import dogsReducer from 'reducers/dogReducer'
import breedsReducer from 'reducers/breedReducer'
import globalReducer from 'reducers/globalReducer'

const rootReducer = combineReducers({
    catsReducer,
    dogsReducer,
    breedsReducer,
    globalReducer,
})



export default rootReducer