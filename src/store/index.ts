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


/**
 * ==============================================================================
 * @todo - Look for a way to bootstrap env variable and use it on build process
 * @option1 - env-cmd
 * ==============================================================================
 */

declare global {
    interface Window {
        __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
    }
}

//Toggle switch for Redux dev tool
let enviroment = process.env.NODE_ENV || 'development' // empty string '' will disable the devtool


const middleWares = [thunk]

const composeEnhancers =
    (enviroment === 'development' &&
        // eslint-disable-next-line dot-notation
        (window['__REDUX_DEVTOOLS_EXTENSION_COMPOSE__'] as typeof compose)) ||
    compose;

export type AppState = ReturnType<typeof rootReducer>;

const Store = createStore(
    rootReducer,
    undefined,
    composeEnhancers(applyMiddleware(...middleWares))
)

export default Store