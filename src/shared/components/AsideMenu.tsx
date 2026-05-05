import { LinkMenu } from "./LinkMenu";
import { LayoutDashboard, Send, History } from "lucide-react";

export const AsideMenu = () => {
  return (
    <aside className="
      w-64 h-screen p-4
      bg-surface
      border-r border-[var(--color-neutral-200)]
      flex flex-col gap-4
    ">
      <h2 className="text-lg font-semibold text-primary px-2">
        BancoXYZ
      </h2>

      <nav className="flex flex-col gap-1">
        <LinkMenu
          to="/dashboard"
          variant="sidebar"
          icon={<LayoutDashboard size={18} />}
        >
          Dashboard
        </LinkMenu>

        <LinkMenu
          to="/transfer"
          variant="sidebar"
          icon={<Send size={18} />}
        >
          Transfer
        </LinkMenu>

        <LinkMenu
          to="/transfer-history"
          variant="sidebar"
          icon={<History size={18} />}
        >
          History
        </LinkMenu>
      </nav>
    </aside>
  );
};