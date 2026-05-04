import axios from "axios";
import type { User, LoginRequest, LoginResponse } from "../models/User";
import { authAdapters } from "../adapters/authAdapters";

const authApi = axios.create({
    baseURL: "https://qf5k9fspl0.execute-api.us-east-1.amazonaws.com/default",
});


export const authService = {
    login : async (loginData: LoginRequest): Promise<User> => {
        const response = await authApi.post<LoginResponse>("/login", loginData);
        return authAdapters.User(response.data);
    },
}