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

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
    const [currentUser, setCurrentUser] = useState<User | null>(()=>{
        const userStored = getLocalStorage(USER_KEY, null);
        return userStored ? userStored : null;
    });

    const login = (userData: User , token: string) => {
        setLocalStorage(USER_KEY, userData);
        setLocalStorage(TOKEN_KEY, token);
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

export const useAuth = (): AuthContextValue => {
    const Auth = useContext(AuthContext);
    if(!Auth) throw new Error('useAuth debe usarse dentro de <AuthProvider>');
    return Auth
}