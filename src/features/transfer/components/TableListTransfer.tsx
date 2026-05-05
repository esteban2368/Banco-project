import { use, useState } from "react";
import { transferService } from '../services/transferService';

import { Button } from "../../../shared/components/Button";
import { Input } from "../../../shared/components/Input";

import { RotateCcw } from 'lucide-react';
import { formatDate } from "../../../shared/utils/dateUtil";

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
        <div className="flex flex-col gap-6">
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
            <div className="rounded-xl bg-white p-6 shadow-md">
                <table className="w-full border-collapse">
                        <thead>
                            <tr className="text-left text-xs uppercase tracking-wide text-primary border-b border-[var(--color-neutral-200)]">
                                <th className="py-3 px-4">Fecha</th>
                                <th className="py-3 px-4">Nombre</th>
                                <th className="py-3 px-4">Moneda</th>
                                <th className="py-3 px-4">Valor</th>
                            </tr>
                        </thead>

                        <tbody>
                            {filteredTransfers?.map((transfer) => {
                            const isPositive = transfer.value > 0;

                            return (
                                <tr
                                key={transfer.payeerDocument}
                                className="border-b border-[var(--color-neutral-200)] hover:bg-[var(--color-background)] transition-colors"
                                >
                                    <td className="py-4 px-4 text-sm text-primary font-bold">
                                        {formatDate(transfer.date)}
                                    </td>
                                    <td className="py-4 px-4 text-sm text-primary font-medium">
                                        {transfer.payeerName}
                                    </td>
                                    <td className="py-4 px-4">
                                        <span className="
                                        text-xs px-2 py-1
                                        rounded-full
                                        bg-[var(--color-background)]
                                        text-secondary
                                        ">
                                        {transfer.currency}
                                        </span>
                                    </td>
                                    <td className={`py-4 px-4 font-medium ${isPositive ? "text-[var(--color-success)]" : "text-primary"}`}>
                                        {transfer.value}
                                    </td>
                                </tr>
                            );
                            })}
                        </tbody>
                </table>
            </div>
        </div>
    )
}