import axios from "axios";
import type { TransferApiRequest, BalanceApiResponse, CreateTransferResponse, ListTransferResponse } from "../models/Transfer";
import { transferAdapters } from "../adapters/transferBalance";

import { PublicInterceptor } from "../../../shared/interceptors/PublicInterceptor";

const transferApi = axios.create({
    baseURL: "/api-transfer",
});

const transferListApi = axios.create({
    baseURL: "/transferlist",
});

const balanceApi = axios.create({
    baseURL: "/api-balance-list",
});

PublicInterceptor(transferApi);
PublicInterceptor(transferListApi);
PublicInterceptor(balanceApi);


export const transferService = {
    makeTransfer : async (transferData: TransferApiRequest) => {
        try {
            const response = await transferApi.post<CreateTransferResponse>("/transfer", transferData);

            return {
                status: response.data.status,
                message: response.data.message
            }
            
        } catch (error: any) {
            return {
                status: error.response?.data?.status,
                message: error.response?.data?.message ||
                "Error al crear la transferencia.",
            }
        }
    },

    getTransfers : async () => {
        try {
            const response = await transferListApi.get<ListTransferResponse>("/transferList");
            console.log(transferAdapters.ListTransfer(response.data))
            return {
                success: true,
                data: transferAdapters.ListTransfer(response.data),
                message: null
            }
        } catch (error: any) {
            return {
                success: false,
                data: null,
                message: error.response?.data?.message ||
                "Error al obtener las transferencias.",
            };
        }
    },

    getBalance : async () => {
        try {
            const response = await balanceApi.get<BalanceApiResponse>("/balance");;
            return {
                success: true,
                data: transferAdapters.Balance(response.data),
                message: null
            }
            
        } catch (error: any) {
            return {
                success: false,
                data: null,
                message: error.response?.data?.message ||
                "Error al ontener el balance",
            };
        }
    }
}