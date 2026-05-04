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
    date: string;
    currency: string;
    transferDate: string;
}

export interface BalanceApiResponse {
    currency: string;
    accountBalance: string;
}