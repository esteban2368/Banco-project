import axios from "axios";
import type { User, loginRequest } from "../models/User";

const authApi = axios.create({
    baseURL: "https://qf5k9fspl0.execute-api.us-east-1.amazonaws.com/default",
});


export const authService = {
    login : async (loginData: loginRequest): Promise<User> => {
        const response = await authApi.post("/login", loginData);
        return response.data;
    },
}