import type { Transfer, BalanceApiResponse, Balance, ListTransferResponse } from "../models/Transfer";

export const transferAdapters = {
   Balance: (balanceData : BalanceApiResponse): Balance => {
        return {
            currency: balanceData.currency,
            valueBalance: balanceData.accountBalance
        };
   },

   ListTransfer: (transferData : ListTransferResponse): Transfer => {
        return {
            value: transferData.transfer.value,
            date: transferData.transfer.date,
            currency: transferData.transfer.currency,
            payeerDocument: transferData.transfer.payeer.document,
            payeerName: transferData.transfer.payeer.name
        };
    }

}
