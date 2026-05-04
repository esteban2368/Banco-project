import { use, useState } from "react";

import type { User, LoginRequest } from "../models/User";
import { authService } from "../services/authService";


export const useLogin = () => {
    const [promise, setPromise] = useState<Promise<User> | null>(null);

    const login = (credentials: LoginRequest) => {
        setPromise(authService.login(credentials));
    };
    
    const user = promise ? use(promise) : null;

    const loginAction = (prevState: unknown, formData: FormData) => {
        console.log("Login action called with form data:", formData);

        return {
            name: "hola",
            email: "hola@example.com",
        }
    }

    return { login, user, loginAction };
};