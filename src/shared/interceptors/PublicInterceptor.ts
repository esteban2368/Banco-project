import { type AxiosInstance } from "axios";

import { getLocalStorage } from "../utils/localStorageUtil";

    export const PublicInterceptor = (instance: AxiosInstance ) => {
        instance.interceptors.request.use(function (request) {
            if (request.headers.Authorization){
                return request;
            }

            const token = getLocalStorage("auth_token", "");

            request.headers.set('Authorization', `Bearer ${token}`)
            request.headers.set('Content-Type', 'application/json')

            return request;
        });
    }