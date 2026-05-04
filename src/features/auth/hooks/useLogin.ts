import {  useActionState } from "react";

import type { User, LoginRequest } from "../models/User";
import { authService } from "../services/authService";

interface LoginState {
  user: User | null;
  message: string | null;
}

const initialState: LoginState = { user: null, message: null };

export const useLogin = () => {
    
    const loginAction = async (
        prevState: unknown, 
        formData: FormData): Promise<LoginState> => {

        const formDataLogin: LoginRequest = {
            email: formData.get("email") as string,
            password: formData.get("password") as string,
        } 
        
        try {
            const user = await authService.login(formDataLogin);
            return { user, message: null };
            
        } catch (error: any) {
            return { user: null, message: error?.data?.message};
        }
    }

    const [state, dispatch, isPending] = useActionState(loginAction, initialState);

    return { state, dispatch, isPending };

};