import { contact } from "@/data/portfolio";

export default function Footer() {
  return (
    <footer className="mt-16 border-t-2 border-[var(--border)]">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          <div>
            <div className="mb-3 font-mono text-[10px] uppercase tracking-[0.3em] text-[var(--muted)]">
              Portfolio
            </div>
            <div className="font-display text-2xl font-extrabold">
              Atharva Lohar
            </div>
            <p className="mt-2 text-sm leading-6 text-[var(--muted)]">
              Software Developer & Technology Explorer. Building things that
              make a difference.
            </p>
          </div>

          <div>
            <div className="mb-3 font-mono text-[10px] uppercase tracking-[0.3em] text-[var(--muted)]">
              Links
            </div>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href={contact.github.url}
                  target="_blank"
                  rel="noreferrer"
                  className="transition-colors hover:text-[var(--accent)]"
                >
                  GitHub ↗
                </a>
              </li>
              <li>
                <a
                  href={contact.linkedin.url}
                  target="_blank"
                  rel="noreferrer"
                  className="transition-colors hover:text-[var(--accent)]"
                >
                  LinkedIn ↗
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${contact.email}`}
                  className="transition-colors hover:text-[var(--accent)]"
                >
                  Email ↗
                </a>
              </li>
            </ul>
          </div>

          <div>
            <div className="mb-3 font-mono text-[10px] uppercase tracking-[0.3em] text-[var(--muted)]">
              Status
            </div>
            <div className="flex items-center gap-2 text-sm">
              <span className="h-2 w-2 bg-[var(--success)] animate-pulse" />
              Still compiling...
            </div>
            <p className="mt-3 font-mono text-[11px] uppercase tracking-wider text-[var(--muted)]">
              © 2026 — All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
