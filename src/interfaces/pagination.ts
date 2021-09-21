export type CatPagination = {
    breed_id: string;
    page: number,
    limit: number,
    final: boolean
}

export interface Pagination<T = CatPagination> {
    [key: string]: T[]
}