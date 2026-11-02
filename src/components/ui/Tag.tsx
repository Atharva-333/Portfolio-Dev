import { cn } from "@/lib/cn";
import type { ReactNode } from "react";

export default function Tag({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center border border-[var(--rule)] bg-[var(--bg)] px-2 py-0.5 font-mono text-[10px] uppercase tracking-wider text-[var(--fg)]",
        className,
      )}
    >
      {children}
    </span>
  );
}
