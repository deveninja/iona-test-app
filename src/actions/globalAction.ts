import { GlobalType } from 'enums/actionTypes'
import { AppDispatch } from 'store'


export const loadingStart = () => async (dispatch: AppDispatch) => {

    try {

        return (
            dispatch({
                type: GlobalType.LOADING_START,
                payload: true
            })
        )
    } catch (error) {

        console.log(error)
    }
}

export const loadingStop = () => async (dispatch: AppDispatch) => {

    try {

        return (
            dispatch({
                type: GlobalType.LOADING_STOP,
                payload: false
            })
        )
    } catch (error) {

        console.log(error)
    }
}