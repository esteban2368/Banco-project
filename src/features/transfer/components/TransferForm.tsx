import { useCreateTransfer } from "../hooks/useCreateTransfer";

import { Input } from "../../../shared/components/Input";
import { Button } from "../../../shared/components/Button";

export const TransferForm = () => {
    const { state, dispatch, isPending } = useCreateTransfer();

    return (
        <div>
            <form action={dispatch}>
                <Input label="Documento" defaultValue={state.inputs?.payeerDocument}  name="payeerDocument" />
                {state.errors?.payeerDocument && <p style={{ color: 'red' }}>{state.errors.payeerDocument}</p>}
                <Input type="number" defaultValue={state.inputs?.value} label="Valor" name="value" />
                {state.errors?.value && <p style={{ color: 'red' }}>{state.errors.value}</p>}
                <Input label="Moneda" defaultValue={state.inputs?.currency} name="currency" />
                {state.errors?.currency && <p style={{ color: 'red' }}>{state.errors.currency}</p>}
                <Input type="date" label="Fecha de Transferencia" defaultValue={state.inputs?.transferDate} name="transferDate" />
                {state.errors?.transferDate && <p style={{ color: 'red' }}>{state.errors.transferDate}</p>}
                <Button type="submit" disabled={isPending}>
                    {isPending ? "Creando Transferencia..." : "Confirmar Transferencia"}
                </Button>
                {state.message && <p style={{ color: 'red' }}>{state.message}</p>}
            </form>
        </div>
    );
};