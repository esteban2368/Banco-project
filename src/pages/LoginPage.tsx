import { FormLogin } from "../features/auth/components/FormLogin";

const LoginPage = () => {
    return (
        <section className="flex flex-col align-items-center justify-center h-svh gap-5">
            <h2>BancoXYZ</h2>
            <FormLogin />
        </section>
    );
};

export default LoginPage;