import z from "zod";

const createTransferSchema = z.object({
    value: z.number().positive("El valor debe ser un número."),
    payeerDocument: z.string().min(1, "El documento del pagador es requerido."),
    currency: z.string().min(1, "La moneda es requerida."),
    transferDate: z.string().min(1, "La fecha de transferencia es requerida."),
});

export type CreateTransferData = z.infer<typeof createTransferSchema>;

export type FormCreateTransferState = {
  errors?: { [K in keyof CreateTransferData]?: string[] };
  message?: string;
  success?: boolean;
  inputs?: Partial<CreateTransferData>;
};

export { createTransferSchema };