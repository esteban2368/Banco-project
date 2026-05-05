import {  useActionState } from "react";
import { Navigate, useNavigate } from "react-router-dom";

import type { CreateTransferResponse } from "../models/Transfer";
import { transferService } from "../services/transferService";

import { useAuth } from "../store/AuthContenxt";

const initialState: CreateTransferResponse = { success: false, message: null };

export const useCreateTransfer = () => {
    const navegate = useNavigate();
    
    const createTransferAction = async (
        prevState: unknown, 
        formData: FormData): Promise<CreateTransferResponse> => {

        console.log("prevState", prevState);
        const formDataLogin: LoginRequest = {
            email: formData.get("email") as string,
            password: formData.get("password") as string,
        } 
        
        const user = await authService.login(formDataLogin);

        login(user.data as User, user.data?.token as string);
        navegate('/dashboard');

        return {
            success: user.success,
            data: user.data,
            message: user.message
        }
    }

    const [state, dispatch, isPending] = useActionState(loginAction, initialState);

    return { state, dispatch, isPending };

};