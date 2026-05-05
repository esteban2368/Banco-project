import { Link, useLocation } from "react-router-dom";

interface LinkMenuProps {
  to: string;
  children: React.ReactNode;
  icon?: React.ReactNode;
  variant?: "header" | "sidebar";
}

export const LinkMenu = ({
  to,
  children,
  icon,
  variant = "header",
}: LinkMenuProps) => {
  const { pathname } = useLocation();
  const isActive = pathname === to;

  const base = `
    flex items-center gap-2
    transition-all duration-200
    font-medium
  `;

  const variants = {
    header: `
      text-sm
      text-secondary
      hover:text-primary
    `,
    sidebar: `
      px-3 py-2 rounded-md
      text-sm
      text-secondary
      hover:bg-[var(--color-background)]
    `,
  };

  const activeStyles = variant === "sidebar"
    ? "bg-primary text-white"
    : "text-primary";

  return (
    <Link
      to={to}
      className={`
        ${base}
        ${variants[variant]}
        ${isActive ? activeStyles : ""}
      `}
    >
      {icon && <span className="text-lg">{icon}</span>}
      {children}
    </Link>
  );
};