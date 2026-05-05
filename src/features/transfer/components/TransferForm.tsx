import { useCreateTransfer } from "../hooks/useCreateTransfer";

import { Input } from "../../../shared/components/Input";
import { Button } from "../../../shared/components/Button";

import { UserRoundSearch, DollarSign, Calendar } from 'lucide-react';

export const TransferForm = () => {
    const { state, dispatch, isPending } = useCreateTransfer();

    return (
        <div className="rounded-xl bg-white p-8 shadow-md border border-gray-100">
            <form action={dispatch}  className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div className="md:col-span-2">
                    <Input label="Documento" defaultValue={state.inputs?.payeerDocument}  name="payeerDocument" error={state.errors?.payeerDocument} leftIcon={<UserRoundSearch size={20}/>}/>
                </div>
                <Input type="number" defaultValue={state.inputs?.value} label="Valor" name="value" leftIcon={<DollarSign size={20}/>} error={state.errors?.value} />
                <Input label="Moneda" defaultValue={state.inputs?.currency} name="currency" error={state.errors?.currency}/>
                <div className="md:col-span-1">
                    <Input type="date" label="Fecha de Transferencia" defaultValue={state.inputs?.transferDate} name="transferDate" error={state.errors?.transferDate} leftIcon={<Calendar size={20}/>}/>   
                </div>
                <div className="md:col-span-2">
                    <Button 
                        type="submit" 
                        disabled={isPending} 
                        className="w-full"
                        
                    >
                        {isPending ? "Creando Transferencia..." : "Confirmar Transferencia"}
                    </Button>
                </div>
                {state.message && <p style={{ color: 'red' }}>{state.message}</p>}
            </form>
        </div>
    );
};