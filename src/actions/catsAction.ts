import catAPI from 'api/catApi'
import { AxiosResponse } from 'axios'
import { CatsType } from 'enums/actionTypes'


export const getCatBreed = (page = 1, id: string) => async (dispatch: any) => {

    try {
        const { data }: AxiosResponse = await catAPI.get(
            `/images/search?page=${page}&limit=10&breed_id=${id}`
        )

        return (
            dispatch({
                type: CatsType.GET_CAT_BREED,
                payload: data
            })
        )
    } catch (error) {

    }
}


export const getCat = (id: string) => async (dispatch: any) => {

    const { data }: AxiosResponse = await catAPI.get(`/images/${id}`)

    return (
        dispatch({
            type: CatsType.GET_CAT,
            payload: data
        })
    )
}