import { Cat, CatList } from 'interfaces/cat'

/**
 * ===============================================================================
 * @param {...rest} rawObject 
 * @param {string} prop 
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
 * @param rawArray - typeof Array
 * @param state - typeof Object
 * @return { [key: string]: Cat }
 * ===============================================================================
 */
export const _mapKeys = (state = {}, rawArray: Cat[]) => {

    // copies the current app state
    const newObject: CatList = { ...state };

    // Overwrites any existing object or add a new one
    new Set(rawArray).forEach((i: Cat) => newObject[i.id] = i)

    return newObject
}
// ===============================================================================