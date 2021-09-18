import axios from 'axios'
import config from '../config/keys'

/**
 * @description - This will also serve as an interceptor for all catapi endpoints
 */

const version = 'v1'

const catAPI = axios.create({
    baseURL: `https://api.thecatapi.com/${version}`,
    headers: {
        'x-api-key': config.catApiKey
    }
})

export default catAPI