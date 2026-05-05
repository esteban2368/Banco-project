import { LinkMenu } from "./LinkMenu";
import { Button } from "./Button";
import { LayoutDashboard, Send, History, LogOut } from "lucide-react";

import { useAuth } from "../../features/auth/store/AuthContenxt";

export const AsideMenu = () => {
    const { logout } = useAuth();

    const handleLogOut = () => {
        logout();
    }
    return (
        <aside className="
        w-64 h-screen p-4
        bg-surface
        border-r border-[var(--color-neutral-200)]
        flex flex-col justify-between gap-4
        ">

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
        <Button
            variant="ghost"
            size="sm"
            onClick={handleLogOut}
        >
            <LogOut size={18} className="mr-2"/>
            <span>Cerrar sesión</span>
        </Button>
        </aside>
    );
};