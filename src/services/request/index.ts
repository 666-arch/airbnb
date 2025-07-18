import axios, { AxiosInstance, AxiosRequestConfig } from 'axios'
import { BASE_URL, TIMEOUTE } from './config';

class httpRequest {
    instance: AxiosInstance;
    constructor(baseURL: string, timeout: number) {
        this.instance = axios.create({
            baseURL,
            timeout
        })
        this.instance.interceptors.response.use((res) => {
            return res.data;
        }, err => {
            return Promise.reject(err)
        })
    }
    request(config: AxiosRequestConfig<any>) {
        return this.instance.request(config)
    }
    get<T>(config: AxiosRequestConfig<T>) {
        return this.request({ ...config, method: "get" })
    }
    post<T>(config: AxiosRequestConfig<T>) {
        return this.request({ ...config, method: "post" })
    }
}

export default new httpRequest(BASE_URL, TIMEOUTE)