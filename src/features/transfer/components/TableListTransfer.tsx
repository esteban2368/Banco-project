import { use, useState } from "react";
import { transferService } from '../services/transferService';

type GetListTransferPromise = ReturnType<typeof transferService.getTransfers>;

export const TableListTransfer = ({ promiseListTransfer }: { promiseListTransfer: GetListTransferPromise  }) => {
    const listTransfer = use(promiseListTransfer);
    const [ filters, setFilters ] = useState({
        value: '',
        date: '',
        payeerName: ''
    })

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFilters({
            ...filters,
            [name]: value
        })
    }

    return (

    )
}