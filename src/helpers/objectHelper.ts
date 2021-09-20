import { Cat, CatList } from 'interfaces/cat'

/**
 * ===============================================================================
 * @description - This function copies over object properties that is not the prop
 * param
 * @param {...rawObject} rawObject - The original object
 * @param {string} prop - The key that should be deleted
 * @return {...newObject} - Object not including the prop key
 * ===============================================================================
 */
export const _delete = (rawObject: any, prop: string) => {
    const newObject = Object.keys(rawObject).reduce((object: any, key: string) => {
        if (key !== prop) {
            object[key] = rawObject[key]
        }
        return object
    }, {})

    return newObject
}
// ===============================================================================


/**
 * ===============================================================================
 * @description - This maps the array and convert it into an object and uses the
 * item ID as the object key and the item as the object value
 * @param {[]} rawArray - the raw array
 * @param {...state} state- the application state
 * @return { [key: string]: Cat } - Object with item.id as the key
 * ===============================================================================
 */
export const _mapKeys = (state = {}, rawArray: Cat[]) => {

    // copies the current app state
    const newObject: CatList = { ...state };

    // Overwrites any existing object or add a new one
    new Set(rawArray).forEach((i: any) => newObject[i.id] = i)

    return newObject
}
// ===============================================================================