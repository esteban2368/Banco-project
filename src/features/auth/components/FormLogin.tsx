import { Input } from "../../../shared/components/Input";
import { Button } from "../../../shared/components/Button";

import { useLogin } from "../hooks/useLogin";

export const FormLogin = () => {
    const { state, dispatch, isPending } = useLogin();

    return (
        <div className="w-full max-w-md mx-auto rounded-2xl bg-white p-8 shadow-md border border-gray-100">
            <form action={dispatch}>
                <Input label="Email" name="email" />
                <Input label="Password" name="password" type="password" />
                <Button type="submit" disabled={isPending}>
                    {isPending ? "Ingresando" : "Ingresar"}
                </Button>
                {state.message && <p style={{ color: 'red' }}>{state.message}</p>}
            </form>
        </div>
    )
}