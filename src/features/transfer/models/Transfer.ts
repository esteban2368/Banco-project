export interface Transfer {
    value: number;
    date: string;
    currency: string;
}

export interface Balance {
    currency: string;
    valueBalance: string
}

export interface TransferApiRequest {
    value: number;
    payeerDocument: string;
    currency: string;
    transferDate: string;
}

export interface CreateTransferResponse { 
    status: string; 
    message: string | null 
}

export interface BalanceApiResponse {
    currency: string;
    accountBalance: string;
}