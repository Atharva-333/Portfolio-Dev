import { cn } from "@/lib/cn";
import type { HTMLAttributes, ReactNode } from "react";

type SectionProps = HTMLAttributes<HTMLElement> & {
  children: ReactNode;
  number: string;
  label: string;
};

export default function Section({
  children,
  className,
  number,
  label,
  id,
  ...props
}: SectionProps) {
  return (
    <section
      id={id}
      className={cn("scroll-mt-24 py-20 sm:py-28", className)}
      {...props}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="mb-12 flex items-center gap-3">
          <span className="inline-flex items-center bg-[var(--accent)] px-2 py-0.5 font-mono text-[10px] font-bold uppercase tracking-wider text-[var(--accent-fg)]">
            {number}
          </span>
          <span className="h-px w-8 bg-[var(--border)]" />
          <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-[var(--muted)]">
            {label}
          </span>
        </div>
        {children}
      </div>
    </section>
  );
}
