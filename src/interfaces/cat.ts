import { CatBreedType } from './breed'

export type CategoriesType = {
    id: string;
    name: string;
}

export type weightType = {
    imperial: string;
    metric: string;
}

export interface Cat {
    id: string;
    url: string;
    sub_id?: string | undefined;
    height?: number | undefined;
    width?: number | undefined;
    created_at?: string | undefined;
    original_filename?: string | undefined;
    categories?: CategoriesType[] | undefined;
    breeds?: CatBreedType[] | undefined;
}

export interface CatList {
    [key: string]: {
        [key: string]: Cat
    }
}


