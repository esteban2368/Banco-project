import React, { createContext, useState } from 'react';
import type { User } from '../models/User';

import { getLocalStorage, setLocalStorage } from '../../../shared/utils/localStorageUtil'

interface AuthContextValue {
    user: User | null;
    saveSession: (user: User, token: string) => void;
    logout: () => void;
    getToken: () => string | null;
}

const TOKEN_KEY = 'auth_token';
const USER_KEY  = 'auth_user';

const AuthContext = createContext<AuthContextValue | null>(null);

const AuthProvider = ({ children }: React.ReactNode) => {
    const [user, setUser] = useState<User | null>(()=>{
        const userStored = getLocalStorage(USER_KEY, null);
        return userStored ? JSON.parse(userStored) : null;
    });

    const saveSession = (userData: User , token: string) => {
        setLocalStorage(USER_KEY, userData);
        setUser(userData)
    }

    const logout = () => {
        
    }

    const getToken = () => {

    }

}