export default function Frame() {
  return (
    <div
      aria-hidden
      className="pointer-events-none fixed inset-0 z-40 hidden lg:block"
    >
      {/* corner registration marks */}
      {(
        [
          ["top-4 left-4", "border-t-2 border-l-2"],
          ["top-4 right-4", "border-t-2 border-r-2"],
          ["bottom-4 left-4", "border-b-2 border-l-2"],
          ["bottom-4 right-4", "border-b-2 border-r-2"],
        ] as const
      ).map(([pos, brd]) => (
        <span
          key={pos}
          className={`absolute h-3 w-3 border-[var(--rule)] ${pos} ${brd}`}
        />
      ))}

      {/* left rail */}
      <div className="absolute left-2 top-1/2 -translate-y-1/2">
        <div className="text-vertical font-mono text-[10px] uppercase tracking-[0.4em] text-[var(--muted)]">
          ATHARVA LOHAR · PORTFOLIO · REV.2026.11
        </div>
      </div>

      {/* right rail */}
      <div className="absolute right-2 top-1/2 -translate-y-1/2">
        <div className="text-vertical font-mono text-[10px] uppercase tracking-[0.4em] text-[var(--muted)]">
          SCROLL · 01 → 05 · DO NOT BEND
        </div>
      </div>
    </div>
  );
}
