import { useCreateTransfer } from "../hooks/useCreateTransfer";

import { Input } from "../../../shared/components/Input";
import { Button } from "../../../shared/components/Button";

export const TransferForm = () => {
    const { state, dispatch, isPending } = useCreateTransfer();

    return (
        <div>
            <form action={dispatch}>
                <Input label="Documento" name="payeerDocument" />
                <Input type="number" label="Valor" name="value" />
                <Input label="Moneda" name="currency" />
                <Input type="date" label="Fecha de Transferencia" name="transferDate" />
                <Button type="submit" disabled={isPending}>
                    {isPending ? "Creando Transferencia..." : "Confirmar Transferencia"}
                </Button>
                {state.message && <p style={{ color: 'red' }}>{state.message}</p>}
            </form>
        </div>
    );
};