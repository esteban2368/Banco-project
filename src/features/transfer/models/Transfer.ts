export interface Transfer {
    value: number;
    date: string;
    currency: string;
    payeerDocument: string;
    payeerName: string;
}

export interface Payeer {
    document: string;
    name: string;
}

export interface Balance {
    currency: string;
    valueBalance: number
}

export interface TransferApiRequest {
    value: number;
    payeerDocument: string;
    currency: string;
    transferDate: string;
}

export interface ListTransferResponse {
    message: string;
    transfers: {
        value: number;
        date: string;
        currency: string;
        payeer: Payeer;
    }[]
}

export interface CreateTransferResponse { 
    status: string; 
    message: string | null 
}

export interface BalanceApiResponse {
    currency: string;
    accountBalance: string;
}