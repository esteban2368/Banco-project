import type { Transfer, BalanceApiResponse, Balance } from "../models/Transfer";

export const TransferAdapters = {
   Balance: (balanceData : BalanceApiResponse): Balance => {
        return {
            currency: balanceData.currency,
            valueBalance: balanceData.accountBalance
        };
   } 
}