import type { User, LoginRequest } from "../models/User";

interface UseLoginReturn {
    login: (credentials: LoginRequest) => Promise<User>;
}

const useLogin = () => {

}