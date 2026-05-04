import { FormLogin } from "../features/auth/components/FormLogin";
import { useAuth } from "../features/auth/store/AuthContenxt";

const LoginPage = () => {
    const { currentUser } = useAuth();
    return (
        <div>
            <h2>Login Page</h2>
            <FormLogin />
            <pre>
                {JSON.stringify(currentUser)}
            </pre>
        </div>
    );
};

export default LoginPage;