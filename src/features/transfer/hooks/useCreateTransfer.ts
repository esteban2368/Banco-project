import {  useActionState } from "react";
import type { CreateTransferResponse } from "../models/Transfer";
import { transferService } from "../services/transferService";

import { createTransferSchema, type FormCreateTransferState } from "../components/TransferFormSchema";

const initialState: FormCreateTransferState = {  message: '', errors: undefined, inputs: undefined };

export const useCreateTransfer = () => {
    
    const createTransferAction = async (
        prevState: FormCreateTransferState, 
        formData: FormData): Promise<FormCreateTransferState> => {

        const formDataTransfer =  Object.fromEntries(formData.entries());

        const validated = createTransferSchema.safeParse(formDataTransfer);

        if (!validated.success) {
            return { 
                errors: validated.error.flatten().fieldErrors,
                inputs: formDataTransfer,
            };
        }
        
        const createTransfer = await transferService.makeTransfer(validated.data);

        return {
            errors: undefined,
            inputs: undefined,
            message: createTransfer.message
        }
    }

    const [state, dispatch, isPending] = useActionState(createTransferAction, initialState);

    return { state, dispatch, isPending };

};