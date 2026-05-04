import { use, useState } from "react";

import type { User, LoginRequest } from "../models/User";
import { authService } from "../services/authService";


const useLogin = () => {
    const [promise, setPromise] = useState<Promise<User> | null>(null);

    const login = (credentials: LoginRequest) => {
        setPromise(authService.login(credentials));
    };
    
    const user = promise ? use(promise) : null;

    return { login, user };
};