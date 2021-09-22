/**
 * ====================================================================
 * @description The single source of truth in react state management
 * @returns redux store
 * ====================================================================
 */


/** IMPORT LIBRARIES */
import { createStore, applyMiddleware, compose } from "redux"
import thunk from "redux-thunk"
import rootReducer from "reducers"


declare global {
    interface Window {
        __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose
    }
}

//Toggle switch for Redux dev tool
let enviroment = process.env.NODE_ENV


const middleWares = [thunk]

const composeEnhancers =
    (enviroment === 'development' &&
        (window['__REDUX_DEVTOOLS_EXTENSION_COMPOSE__'] as typeof compose)) ||
    compose

const Store = createStore(
    rootReducer,
    undefined,
    composeEnhancers(applyMiddleware(...middleWares))
)

export type AppState = ReturnType<typeof rootReducer>
export type AppDispatch = typeof Store.dispatch

export default Store