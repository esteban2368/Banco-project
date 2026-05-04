import { Input } from "../../../shared/components/Input";
import { Button } from "../../../shared/components/Button";

import { useLogin } from "../hooks/useLogin";

export const FormLogin = () => {
    const { state, dispatch, isPending } = useLogin();

    return (
        <div>
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