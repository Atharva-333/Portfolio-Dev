import { cn } from "@/lib/cn";
import type { HTMLAttributes, ReactNode } from "react";

type BlockProps = HTMLAttributes<HTMLDivElement> & { children: ReactNode };

export default function Block({ children, className, ...props }: BlockProps) {
  return (
    <div
      className={cn(
        "border-2 border-[var(--border)] bg-[var(--surface)]",
        className,
      )}
      {...props}
    >
      {children}
    </div>
  );
}
