import React from "react";
import { CheckCircle, AlertCircle, AlertTriangle, Info } from "lucide-react";

type AlertVariant = "success" | "error" | "warning" | "info";

interface AlertProps {
  title?: string;
  description?: string;
  variant?: AlertVariant;
  icon?: React.ReactNode;
}

const variants = {
  success: {
    container: "bg-[rgba(22,163,74,0.1)] border-[var(--color-success)]",
    text: "text-[var(--color-success)]",
    icon: <CheckCircle size={20} />,
  },
  error: {
    container: "bg-[rgba(220,38,38,0.1)] border-[var(--color-error)]",
    text: "text-[var(--color-error)]",
    icon: <AlertCircle size={20} />,
  },
  warning: {
    container: "bg-[rgba(245,158,11,0.1)] border-[var(--color-warning)]",
    text: "text-[var(--color-warning)]",
    icon: <AlertTriangle size={20} />,
  },
  info: {
    container: "bg-[var(--color-background)] border-primary",
    text: "text-primary",
    icon: <Info size={20} />,
  },
};

export const Alert = ({
  title,
  description,
  variant = "info",
  icon,
}: AlertProps) => {
  const styles = variants[variant];

  return (
    <div
      className={`
        flex items-start gap-3
        p-4
        rounded-md
        border
        ${styles.container}
      `}
    >
      <div className={`${styles.text} mt-0.5`}>
        {icon || styles.icon}
      </div>

      <div className="flex flex-col">
        {title && (
          <span className={`font-medium text-sm ${styles.text}`}>
            {title}
          </span>
        )}

        {description && (
          <span className="text-sm text-secondary">
            {description}
          </span>
        )}
      </div>
    </div>
  );
};