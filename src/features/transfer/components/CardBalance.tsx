import { Suspense } from 'react';

import { ShowBalance } from "./ShowBalance";
import { transferService } from "../services/transferService";

export const CardBalance = () => {
    const promise = transferService.getBalance();
    return (
        <div>
            <Suspense fallback={<p>Cargando balance</p>}>
                <ShowBalance balancePromise={promise}/>
            </Suspense>
        </div>
    );
};