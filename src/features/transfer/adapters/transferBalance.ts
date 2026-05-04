import type { Transfer, BalanceApiResponse, Balance } from "../models/Transfer";

export const transferAdapters = {
   Balance: (balanceData : BalanceApiResponse): Balance => {
        return {
            currency: balanceData.currency,
            valueBalance: balanceData.accountBalance
        };
   } 
}