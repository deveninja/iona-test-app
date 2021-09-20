/**
* ====================================================================
* @description Main reducer file that contains imported reducers
* @returns root reducer
* ====================================================================
*/


/** IMPORT DEPENDENCIES */
import { combineReducers } from 'redux'


/** IMPORT REDUCERS */
import catsReducer from 'reducers/catsReducer'
import dogsReducer from 'reducers/dogsReducer'
import breedsReducer from 'reducers/breedsReducer'
import globalReducer from 'reducers/globalReducer'

const rootReducer = combineReducers({
    catsReducer,
    dogsReducer,
    breedsReducer,
    globalReducer
})



export default rootReducer