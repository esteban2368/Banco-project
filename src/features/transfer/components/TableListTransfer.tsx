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

    const filteredTransfers = listTransfer.data?.filter(transfer => {
        return (
            transfer.value.toString().includes(filters.value) &&
            transfer.date.includes(filters.date) &&
            transfer.payeerName.toLowerCase().includes(filters.payeerName.toLowerCase())
        );
    });
    

    return (
        <div>
            <input type="text" name="value" value={filters.value} onChange={handleChange} placeholder="Filtrar por valor"/>
            <input type="text" name="date" value={filters.date} onChange={handleChange} placeholder="Filtrar por fecha"/>
            <input type="text" name="payeerName" value={filters.payeerName} onChange={handleChange} placeholder="Filtrar por nombre"/>
            <table>
                <thead>
                    <tr>
                        <th>Valor</th>
                        <th>Fecha</th>
                        <th>Moneda</th>
                        <th>Nombre del pagador</th>
                    </tr>
                </thead>
                <tbody>
                    {filteredTransfers?.map((transfer, index) => (
                        <tr key={transfer.payeerDocument}>
                            <td>{transfer.value}</td>
                            <td>{transfer.date}</td>
                            <td>{transfer.currency}</td>
                            <td>{transfer.payeerName}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <pre>{JSON.stringify(listTransfer.data, null, 2)}</pre>
        </div>
    )
}