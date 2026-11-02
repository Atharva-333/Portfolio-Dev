import { cn } from "@/lib/cn";
import type { ReactNode } from "react";

type ButtonProps = {
  children: ReactNode;
  href?: string;
  onClick?: () => void;
  variant?: "primary" | "ghost";
  className?: string;
  type?: "button" | "submit";
};

export default function Button({
  children,
  href,
  onClick,
  variant = "primary",
  className,
  type = "button",
}: ButtonProps) {
  const base =
    "inline-flex items-center justify-center gap-2 border-2 px-5 py-2.5 font-mono text-[11px] font-bold uppercase tracking-[0.2em] transition-all duration-100 " +
    "active:translate-x-[2px] active:translate-y-[2px]";

  const styles = {
    primary:
      "border-[var(--accent)] bg-[var(--accent)] text-[var(--accent-fg)] hover:bg-[var(--accent)]/85",
    ghost:
      "border-[var(--rule)] bg-transparent text-[var(--fg)] hover:border-[var(--fg)]",
  };

  if (href) {
    return (
      <a href={href} className={cn(base, styles[variant], className)}>
        {children}
      </a>
    );
  }
  return (
    <button
      type={type}
      onClick={onClick}
      className={cn(base, styles[variant], className)}
    >
      {children}
    </button>
  );
}
