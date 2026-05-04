import React, { createContext, useState, useContext } from 'react';
import type { User } from '../models/User';

import { getLocalStorage, setLocalStorage, clearStorage } from '../../../shared/utils/localStorageUtil'

interface AuthContextValue {
    currentUser: User | null;
    login: (user: User, token: string) => void;
    logout: () => void;
    getToken: () => string | null;
}

const TOKEN_KEY = 'auth_token';
const USER_KEY  = 'auth_user';

const AuthContext = createContext<AuthContextValue | null>(null);

const AuthProvider = ({ children }: { children: React.ReactNode }) => {
    const [currentUser, setCurrentUser] = useState<User | null>(()=>{
        const userStored = getLocalStorage(USER_KEY, null);
        return userStored ? JSON.parse(userStored) : null;
    });

    const login = (userData: User , token: string) => {
        setLocalStorage(USER_KEY, userData);
        setCurrentUser(userData)
    }

    const logout = () => {
        clearStorage(USER_KEY);
        clearStorage(TOKEN_KEY);
        setCurrentUser(null);
    }

    const getToken = () => {
        return getLocalStorage(TOKEN_KEY, null);
    }

    const contextValue: AuthContextValue = {
        currentUser,
        login,
        logout,
        getToken
    }

    return (
        <AuthContext value={contextValue}>
            {children}
        </AuthContext>
    )

}

export const useAuth = () => {
    const Auth = useContext(AuthContext);
    return Auth
}