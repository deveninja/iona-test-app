import catAPI from 'api/catApi'
import { AxiosResponse } from 'axios'
import { CatsType } from 'enums/actionTypes'
import { SearchParamsType } from 'interfaces/searchParams'


export const getCatBreed = (params: SearchParamsType) => async (dispatch: any) => {

    const { id, page, limit } = params
    try {
        const { data }: AxiosResponse = await catAPI.get(
            `/images/search?page=${page ?? 1}&limit=${limit ?? 10}&breed_id=${id}`
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