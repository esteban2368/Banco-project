import { createContext } from 'react';
import type { User } from '../models/User';

interface AuthContextValue {
    user: User | null;
    saveSession: (user: User, token: string) => void;
    logout: () => void;
    getToken: () => string | null;
}

const TOKEN_KEY = 'auth_token';
const USER_KEY  = 'auth_user';

