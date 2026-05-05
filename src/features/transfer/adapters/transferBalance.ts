import type { Transfer, BalanceApiResponse, Balance, ListTransferResponse } from "../models/Transfer";

export const transferAdapters = {
   Balance: (balanceData : BalanceApiResponse): Balance => {
        return {
            currency: balanceData.currency,
            valueBalance: balanceData.accountBalance
        };
   },

   ListTransfer: (transferData : ListTransferResponse): Transfer[] => {
        return transferData.transfers.map(transfer => ({
            value: transfer.value,
            date: transfer.date,
            currency: transfer.currency,
            payeerDocument: transfer.payeer.document,
            payeerName: transfer.payeer.name
        }));
    }

}
