import axios from "axios";
import type { User, LoginRequest, LoginResponse, AuthResponse } from "../models/User";
import { authAdapters } from "../adapters/authAdapters";

const authApi = axios.create({
    baseURL: "https://qf5k9fspl0.execute-api.us-east-1.amazonaws.com/default",
});


export const authService = {
    login : async (loginData: LoginRequest): Promise<AuthResponse> => {
        try {
            const response = await authApi.post<LoginResponse>("/login", loginData);
            return {
                success: true,
                data: authAdapters.User(response.data),
                message: null
            }
            
        } catch (error: any) {
            return {
                success: false,
                data: null,
                message: error.response?.data?.message ||
                "Error al iniciar sesión",
            };
        }
    },
}