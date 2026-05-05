import { use } from "react";
import { transferService } from '../services/transferService';

type GetListTransferPromise = ReturnType<typeof transferService.getTransfers>;

export const TableListTransfer = ({ promiseListTransfer }: { promiseListTransfer: GetListTransferPromise  }) => {
    const listTransfer = use(promiseListTransfer);
    return (

    )
}