import axios from "axios";

import { getLocalStorage } from "../utils/localStorageUtil";

export const PublicInterceptor = () => {
    axios.interceptors.request.use(function (request) {
        if (request.headers.Authorization){
            return request;
        }

        const token = getLocalStorage("token", "");

        request.headers.set('Authorization', `Bearer ${token}`)
        request.headers.set('Content-Type', 'application/json')

        return request;
    });
}