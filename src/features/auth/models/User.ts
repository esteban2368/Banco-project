export interface User {
    id: string;
    name: string;
    email: string;
    token: string;
}

export interface UserFromApi {
    id: string;
    name: string;
    email: string;
}

export interface LoginResponse {
    token: string;
    user: UserFromApi;
}
export interface LoginRequest {
    email: string;
    password: string;
}

