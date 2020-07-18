import axios from 'axios';

import { baseURL } from './baseURL.json'

const api = axios.create({
    baseURL: baseURL,
    withCredentials: true,
    headers: {
        'content-type': 'application/x-www-form-urlencoded'
    }
})
export default api;