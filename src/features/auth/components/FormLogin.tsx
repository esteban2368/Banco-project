import { useActionState } from "react";

import { Input } from "../../../shared/components/Input";

import { useLogin } from "../hooks/useLogin";

export const FormLogin = () => {
    const { loginAction } = useLogin();
    const [state, formAction, isPending] = useActionState(loginAction, null);

    return (
        <div>
            <form action={formAction}>
                <Input label="Username" name="username" />
                <Input label="Password" name="password" type="password" />
                <button type="submit">Login</button>
            </form>
        </div>
    )
}