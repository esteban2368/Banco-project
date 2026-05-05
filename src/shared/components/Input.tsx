import React from "react";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  name: string;
  error?: string;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
}

export const Input = ({
  label,
  name,
  error,
  leftIcon,
  rightIcon,
  className,
  ...props
}: InputProps) => {
  const hasError = Boolean(error);

  return (
    <div className="flex flex-col gap-1.5 w-full">
      
      {label && (
        <label
          htmlFor={name}
          className="text-sm font-bold text-primary"
        >
          {label}
        </label>
      )}

      <div
        className={`
          flex items-center gap-2
          h-11 w-full px-3
          rounded-md
          border
          bg-surface
          transition-all
          
          ${hasError 
            ? "border-[var(--color-error)] focus-within:ring-2 focus-within:ring-[var(--color-error)]" 
            : "border-[var(--color-neutral-200)] focus-within:ring-2 focus-within:ring-primary]"
          }
        `}
      >
        {leftIcon && (
          <span className="text-[var(--color-neutral-300)]">
            {leftIcon}
          </span>
        )}

        <input
          id={name}
          name={name}
          className={`
            w-full bg-transparent outline-none text-sm
            text-primary]
            placeholder:text-[var(--color-neutral-300)]
          `}
          {...props}
        />

        {rightIcon && (
          <span className="text-[var(--color-neutral-300)] cursor-pointer">
            {rightIcon}
          </span>
        )}
      </div>

      {hasError && (
        <p className="text-xs text-[var(--color-error)]">
          {error}
        </p>
      )}
    </div>
  );
};