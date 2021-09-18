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

const rootReducer = combineReducers({
    catsReducer
})



export default rootReducer