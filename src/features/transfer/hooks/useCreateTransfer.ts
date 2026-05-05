import {  useActionState } from "react";

import type { CreateTransferResponse, TransferApiRequest } from "../models/Transfer";
import { transferService } from "../services/transferService";

const initialState: CreateTransferResponse = { status: "", message: null };

export const useCreateTransfer = () => {
    
    const createTransferAction = async (
        prevState: unknown, 
        formData: FormData): Promise<CreateTransferResponse> => {

        console.log("prevState", prevState);
        const formDataTransfer: TransferApiRequest = {
            value: formData.get("value") as unknown as number,
            payeerDocument: formData.get("payeerDocument") as string,
            currency: formData.get("currency") as string,
            transferDate: formData.get("transferDate") as string,
        } 
        
        const createTransfer = await transferService.makeTransfer(formDataTransfer);

        return {
            status: createTransfer.status,
            message: createTransfer.message
        }
    }

    const [state, dispatch, isPending] = useActionState(createTransferAction, initialState);

    return { state, dispatch, isPending };

};