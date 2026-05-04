import type { LoginResponse, User } from "../models/User";

export const authAdapters = {
   User: (userData : LoginResponse): User => {
        return {
            id: userData.user.id,
            name: userData.user.name,
            email: userData.user.email,
            token: userData.token
        };
   } 
}