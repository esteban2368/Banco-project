import { Suspense } from 'react';
import type { Balance } from "../models/Transfer";

import { ShowBalance } from "./ShowBalance";
import { transferService } from "../services/transferService";

export const CardBalance = ({ balance }: { balance: Balance }) => {
    const promise = transferService.getTransfers();
    return (
        <div>
            <h2>Saldo disponible</h2>
            <p>${balance.valueBalance}</p>
        </div>
    );
};