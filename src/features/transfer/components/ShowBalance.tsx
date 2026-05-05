
import { use } from "react";
import { transferService } from "../services/transferService";

type GetBalancePromise = ReturnType<typeof transferService.getBalance>;

export const ShowBalance = ({ balancePromise }: { balancePromise: GetBalancePromise }) => {
  const balance = use(balancePromise);

  return (
    <div className="
      relative
      w-full max-w-xl
      h-56
      p-6
      rounded-lg
      bg-primary
      text-[var(--color-text-inverted)]
      shadow-lg
      overflow-hidden
    ">
      <div className="absolute right-[-80px] bottom-[-80px] w-72 h-72 border border-white/10 rounded-full" />
      <div className="absolute right-[-40px] bottom-[-40px] w-56 h-56 border border-white/10 rounded-full" />
      <div className="relative z-10 flex flex-col gap-4">
        <span className="text-xs tracking-wide text-neutral-200 uppercase">
          Saldo disponible
        </span>

        <h2 className="text-3xl font-semibold">
          {balance.data?.currency} {balance.data?.valueBalance.toLocaleString("es-CO", { style: "currency", currency: "COP" })}
        </h2>
      </div>
    </div>
  );
};