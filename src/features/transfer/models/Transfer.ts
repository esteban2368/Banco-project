interface Transfer {
    value: number;
    date: string;
    currency: string;
}

export interface TransferApiRequest {
    value: number;
    date: string;
    currency: string;
    transferDate: string;
}