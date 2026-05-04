export interface User {
    id: string;
    name: string;
    email: string;
}

export interface loginRequest {
    email: string;
    password: string;
}