
import { use } from "react";
import type { Balance } from "../models/Transfer";
import { transferService } from "../services/transferService";

type GetBalancePromise = ReturnType<typeof transferService.getBalance>;

export const ShowBalance = ({ balancePromise }: { balancePromise: GetBalancePromise }) => {

    const balance = use(balancePromise);
    return (
        <div>
            <h1>Show Balance</h1>
            <p>{balance.data?.currency}</p>
            <p>{balance.data?.valueBalance}</p>
        </div>
    );
};