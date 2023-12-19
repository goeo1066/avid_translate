import axios from "axios";

class Http {
    constructor() {
        this._instance = axios.create({
            baseURL: "http://localhost:8080"
        })
    }

    /**
     *
     * @param {string} endpoint
     * @param {any} data
     * @return {Promise<axios.AxiosResponse<any>>}
     * @public
     */
    async post(endpoint, data) {
        return await this._instance.post(endpoint, data, {
            headers: {
                "Content-Type": "application/json"
            }
        });
    }

    /**
     *
     * @param {string} endpoint
     * @return {Promise<axios.AxiosResponse<any>>}
     * @public
     */
    async get(endpoint) {
        return await this._instance.get(endpoint);
    }
}

const httpInstance = new Http();

export default httpInstance;

class Assets {
    constructor() {
        this._instance = axios.create({
            baseURL: "http://localhost:5173"
        })
    }

    /**
     *
     * @param {string} endpoint
     * @param {any} data
     * @return {Promise<axios.AxiosResponse<any>>}
     * @public
     */
    async post(endpoint, data) {
        return await this._instance.post(endpoint, data, {
            headers: {
                "Content-Type": "application/json"
            }
        });
    }

    /**
     *
     * @param {string} endpoint
     * @return {Promise<axios.AxiosResponse<any>>}
     * @public
     */
    async get(endpoint) {
        return await this._instance.get(endpoint);
    }
}

export const assetsInstance = new Assets();

/**
 *
 * @param {string} url
 */
export function retrieveSubUrl(url) {
    if (url.startsWith("http://")) {
        url = url.replace(/^http:\/\//g)
    } else if (url.startsWith("https://")) {
        url = url.replace(/^https:\/\//g)
    }
    let index = url.indexOf("/");
    let result = url.substring(index);
    console.log(result);
    return result;
}