import axios from "axios";
import type { TransferApiRequest, BalanceApiResponse, CreateTransferResponse } from "../models/Transfer";
import { transferAdapters } from "../adapters/transferBalance";

import { PublicInterceptor } from "../../../shared/interceptors/PublicInterceptor";

const transferApi = axios.create({
    baseURL: "https://ofqx4zxgcf.execute-api.us-east-1.amazonaws.com/default",
});

const transferListApi = axios.create({
    baseURL: "https://n0qaa2fx3c.execute-api.us-east-1.amazonaws.com/default",
});

const balanceApi = axios.create({
    baseURL: "https://2k0ic4z7s5.execute-api.us-east-1.amazonaws.com/default",
});

PublicInterceptor(transferApi);
PublicInterceptor(transferListApi);
PublicInterceptor(balanceApi);


export const transferService = {
    makeTransfer : async (transferData: TransferApiRequest) => {
        try {
            const response = await transferApi.post<CreateTransferResponse>("/transfer", transferData);

            return {
                success: response.data.status === "success",
                message: response.data.message
            }
            
        } catch (error: any) {
            return {
                success: error.data.status === "error",
                message: error.response?.data?.message ||
                "Error al crear la transferencia.",
            }
        }
    },

    getTransfers : async () => {
        return await transferListApi.get("/transferList");
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