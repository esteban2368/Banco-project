import { use, useState } from "react";
import { transferService } from '../services/transferService';

import { Button } from "../../../shared/components/Button";
import { Input } from "../../../shared/components/Input";

import { RotateCcw } from 'lucide-react';

type GetListTransferPromise = ReturnType<typeof transferService.getTransfers>;

const InitialStateFilters = {
    value: '',
    date: '',
    payeerName: ''
}

export const TableListTransfer = ({ promiseListTransfer }: { promiseListTransfer: GetListTransferPromise  }) => {
    const listTransfer = use(promiseListTransfer);
    const [ filters, setFilters ] = useState(InitialStateFilters)

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFilters({
            ...filters,
            [name]: value
        })
    }
    
    const clearFilters = () => {
        setFilters(InitialStateFilters)
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
            <div className="rounded-xl bg-white p-6 shadow-md">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-5">
                    <div className="md:col-span-3">
                        <Input type="text" name="value" label="valor" value={filters.value} onChange={handleChange} placeholder="Filtrar por valor"/>

                    </div>
                    <div className="md:col-span-3">
                        <Input type="date" name="date" label="Fecha" value={filters.date} onChange={handleChange} placeholder="Filtrar por fecha"/>
                    </div>
                    <div className="md:col-span-3">
                        <Input type="text" name="payeerName" label="Nombre" value={filters.payeerName} onChange={handleChange} placeholder="Filtrar por nombre"/>
                    </div>
                    <div className="md:col-span-3 flex items-center">
                        <Button onClick={clearFilters} variant="outline" size="sm" className="mt-6">
                            <RotateCcw size={18}/>
                        </Button>
                    </div>
                </div>
            </div>
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
        </div>
    )
}