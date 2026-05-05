import { Input } from "../../../shared/components/Input";
import { Button } from "../../../shared/components/Button";
import { Mail, Eye } from "lucide-react";

import { useLogin } from "../hooks/useLogin";
import { Alert } from "../../../shared/components/Alert";

export const FormLogin = () => {
    const { state, dispatch, isPending } = useLogin();

    return (
        <div className="w-full max-w-md mx-auto rounded-2xl bg-white p-8 shadow-md border border-gray-100">
            <p className="text-2xl text-primary font-medium text-center">Bienvenido</p>
            <p className="text-sm text-primary font-light text-center">Ingresa tus credenciales</p>
            <form action={dispatch} className="flex flex-col gap-5">
                <Input label="Email" name="email" leftIcon={<Mail size={18}/>} />
                <Input label="Password" name="password" type="password" leftIcon={<Eye size={18}/>}/>
                <Button type="submit" disabled={isPending} className="w-full">
                    {isPending ? "Ingresando" : "Ingresar"}
                </Button>
                {state.message &&
                    <Alert
                        variant={state.success ? "success": "error"}
                        title={state.message}
                        description=""
                    />
                }
            </form>
        </div>
    )
}