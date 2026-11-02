import type { ReactNode } from "react";

export default function Marquee({
  items,
  className = "",
}: {
  items: ReactNode[];
  className?: string;
}) {
  const row = (key: string) => (
    <div key={key} className="flex shrink-0 items-center gap-6 pr-6">
      {items.map((it, i) => (
        <span
          key={i}
          className="flex shrink-0 items-center gap-6 font-mono text-[11px] uppercase tracking-[0.35em]"
        >
          <span>{it}</span>
          <span className="text-current/40">◆</span>
        </span>
      ))}
    </div>
  );

  return (
    <div
      className={`overflow-hidden border-y-2 border-[var(--rule)] bg-[var(--panel)] py-2.5 text-[var(--panel-fg)] ${className}`}
    >
      <div className="marquee-track flex w-max">
        {row("a")}
        {row("b")}
      </div>
    </div>
  );
}
