import { GlobalType } from 'enums/actionTypes'
import { ErrorObjType } from 'interfaces/notification'
import { AnyAction } from 'redux'

const initialState: { loadingState: boolean, error: ErrorObjType } = {
    loadingState: false,
    error: {
        show: false,
        message: '',
        title: ''
    }
}

const catsReducer = (state = initialState, action: AnyAction) => {
    switch (action.type) {

        case GlobalType.LOADING_START:
            return {
                ...state,
                loadingState: true
            }

        case GlobalType.LOADING_STOP:
            return {
                ...state,
                loadingState: false
            }

        case GlobalType.ERROR:
            return {
                ...state,
                error: action.payload
            }

        default:
            return state
    }
}

export default catsReducer