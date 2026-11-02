import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

type SheetProps = {
  id: string;
  number: string;
  label: string;
  title: string;
  subtitle?: string;
  children: ReactNode;
  className?: string;
};

export default function Sheet({
  id,
  number,
  label,
  title,
  subtitle,
  children,
  className,
}: SheetProps) {
  return (
    <section id={id} className={cn("scroll-mt-20", className)}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">
        {/* measurement rule + crosshairs */}
        <div className="flex items-center gap-2 pt-16 sm:pt-20">
          <span className="font-mono text-sm leading-none text-[var(--muted)]">
            +
          </span>
          <span className="h-px flex-1 bg-[var(--rule)]" />
          <span className="font-mono text-sm leading-none text-[var(--muted)]">
            +
          </span>
        </div>

        {/* ribbon */}
        <div className="mt-5 flex flex-wrap items-center gap-3">
          <span className="inline-flex items-center bg-[var(--accent)] px-2.5 py-1 font-mono text-xs font-bold uppercase tracking-wider text-[var(--accent-fg)]">
            §{number}
          </span>
          <span className="h-px w-8 bg-[var(--rule)]" />
          <span className="font-mono text-[10px] uppercase tracking-[0.35em] text-[var(--muted)]">
            {label}
          </span>
          <span className="ml-auto font-mono text-[10px] uppercase tracking-[0.35em] text-[var(--muted)]">
            {number} / 05
          </span>
        </div>

        {/* heading with ghost number */}
        <div className="relative mt-6">
          <span
            aria-hidden
            className="pointer-events-none absolute -top-6 right-0 select-none font-display text-[clamp(6rem,18vw,14rem)] leading-none text-[var(--rule)] opacity-60"
          >
            {number}
          </span>
          <h2 className="font-display relative text-[clamp(2.5rem,7vw,5.5rem)] text-[var(--fg)]">
            {title}
          </h2>
        </div>

        {subtitle && (
          <p className="relative mt-4 max-w-2xl text-sm leading-7 text-[var(--muted)] sm:text-base">
            {subtitle}
          </p>
        )}

        <div className="relative mt-10">{children}</div>
      </div>
    </section>
  );
}
