import { LinkMenu } from "./LinkMenu";

export const Header = () => {
  return (
    <header className="
      h-16 px-6
      flex items-center justify-between
      bg-surface
      border-b border-[var(--color-neutral-200)]
    ">
      <h1 className="text-lg font-semibold text-primary">
        BancoXYZ
      </h1>

      <nav className="flex items-center gap-6">
        <LinkMenu to="/dashboard">Dashboard</LinkMenu>
        <LinkMenu to="/transfer">Transfer</LinkMenu>
        <LinkMenu to="/transfer-history">History</LinkMenu>
      </nav>
    </header>
  );
};
