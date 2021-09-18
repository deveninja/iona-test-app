import { Cat } from 'interfaces/cat'

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
 * @argument rawArray - typeof Array
 * ===============================================================================
 */
export const _mapKeys = (state = {}, rawArray: any[]) => {
    let newObject: any = { ...state };
    new Set(rawArray).forEach((i: Cat) => newObject[i.id] = i)

    return newObject
}
// ===============================================================================