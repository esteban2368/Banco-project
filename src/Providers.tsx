import {  AuthProvider } from './src/features/auth/store/AuthContenxt';


export const Providers = ({children}:{ children: React.ReactNode }) => {
    return (
        <AuthProvider>
            {children}
        </AuthProvider>
    )
}