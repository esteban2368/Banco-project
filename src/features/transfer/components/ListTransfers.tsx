import { Suspense } from 'react';
import { transferService } from '../services/transferService';

import { TableListTransfer } from './TableListTransfer';

export const ListTransfers = () => {
    const promise = transferService.getTransfers();
    return (
        <div>
            <h2>Listado de transferencias</h2>
            <Suspense fallback={<p>Cargando transferencias</p>}>
                <TableListTransfer promiseListTransfer={promise} />
            </Suspense> 
        </div>
    )
}