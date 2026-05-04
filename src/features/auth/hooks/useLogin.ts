import {  useActionState } from "react";

import type { User, LoginRequest, AuthResponse } from "../models/User";
import { authService } from "../services/authService";

const initialState: AuthResponse = { success: false, data: null, message: null };

export const useLogin = () => {
    
    const loginAction = async (
        prevState: unknown, 
        formData: FormData): Promise<AuthResponse> => {

        console.log("prevState", prevState);
        const formDataLogin: LoginRequest = {
            email: formData.get("email") as string,
            password: formData.get("password") as string,
        } 
        
        const user = await authService.login(formDataLogin);

        return {
            success: user.success,
            data: user.data,
            message: user.message
        }
    }

    const [state, dispatch, isPending] = useActionState(loginAction, initialState);

    return { state, dispatch, isPending };

};