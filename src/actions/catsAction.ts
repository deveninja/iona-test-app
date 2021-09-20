import catAPI from 'api/catApi'
import { AxiosResponse } from 'axios'
import { CatsType, GlobalType } from 'enums/actionTypes'
import { SearchParamsType } from 'interfaces/searchParams'
import { AppDispatch } from 'store'


export const getCatBreed = (params: SearchParamsType) => async (dispatch: AppDispatch) => {

    dispatch({
        type: GlobalType.LOADING_START,
        payload: false
    })


    const { id, page, limit } = params
    try {
        const { data }: AxiosResponse = await catAPI.get(
            `/images/search?page=${page ?? 1}&limit=${limit ?? 10}&breed_id=${id}`
        )


        return (
            dispatch({
                type: CatsType.GET_CAT_BREED,
                payload: { id, data }
            }),
            dispatch({
                type: GlobalType.LOADING_STOP,
                payload: false
            })
        )
    } catch (error: any) {

        dispatch({
            type: GlobalType.LOADING_STOP,
            payload: false
        })

        dispatch({
            type: GlobalType.ERROR,
            payload: {
                show: true,
                message: 'Apologies but we could not load new cats for you at this time! Miau!'
            }
        })
    }
}


export const getCat = (id: string, breed: string) => async (dispatch: AppDispatch) => {
    dispatch({
        type: GlobalType.LOADING_START,
        payload: false
    })
    try {
        const { data }: AxiosResponse = await catAPI.get(`/images/${id}`)

        return (
            dispatch({
                type: CatsType.GET_CAT,
                payload: { id: breed, data }
            }),

            dispatch({
                type: GlobalType.LOADING_STOP,
                payload: false
            })
        )
    } catch (error) {
        dispatch({
            type: GlobalType.LOADING_STOP,
            payload: false
        })

        dispatch({
            type: GlobalType.ERROR,
            payload: {
                show: true,
                message: 'Apologies, the cat is not home! Miau!'
            }
        })
    }
}


export const getCatBreedList = () => async (dispatch: AppDispatch) => {
    dispatch({
        type: GlobalType.LOADING_START,
        payload: false
    })

    try {
        const { data }: AxiosResponse = await catAPI.get(`/breeds`)

        const dropDownObject = data.map(({ id, name }: { id: string, name: string }) => ({ id, name }))

        return (
            dispatch({
                type: CatsType.GET_CAT_BREED_LIST,
                payload: dropDownObject
            }),
            dispatch({
                type: GlobalType.LOADING_STOP,
                payload: false
            })
        )
    } catch (error) {
        dispatch({
            type: GlobalType.LOADING_STOP,
            payload: false
        })

        dispatch({
            type: GlobalType.ERROR,
            payload: {
                show: true,
                message: 'Apologies, the cats are busy at the moment! Miau!'
            }
        })
    }
}