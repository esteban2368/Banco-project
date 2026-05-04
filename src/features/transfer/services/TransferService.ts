import axios from "axios";
import type { TransferApiRequest } from "../models/Transfer";

const transferApi = axios.create({
    baseURL: "https://ofqx4zxgcf.execute-api.us-east-1.amazonaws.com/default",
});

const transferListApi = axios.create({
    baseURL: "https://n0qaa2fx3c.execute-api.us-east-1.amazonaws.com/default",
});

const balanceApi = axios.create({
    baseURL: "https://2k0ic4z7s5.execute-api.us-east-1.amazonaws.com/default",
});

export const TransferService = {
    makeTransfer : async (transferData: TransferApiRequest) => {
        return await transferApi.post("/transfer", transferData);
    },

    getTransfers : async () => {
        return await transferListApi.get("/transferList");
    },

    getBalance : async () => {
        return await balanceApi.get("/balance");
    }
}