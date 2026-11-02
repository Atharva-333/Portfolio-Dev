import { contact } from "@/data/portfolio";

export default function Footer() {
  return (
    <footer className="mt-20 border-t-2 border-[var(--rule)]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">
        <div className="grid gap-10 py-12 md:grid-cols-3">
          <div>
            <div className="font-mono text-[10px] uppercase tracking-[0.35em] text-[var(--muted)]">
              Document end
            </div>
            <div className="mt-3 font-display text-3xl leading-none">
              ATHARVA
              <br />
              LOHAR.
            </div>
            <p className="mt-3 text-sm leading-6 text-[var(--muted)]">
              That's the portfolio. The experiments, however, are far from over.
            </p>
          </div>
          <div>
            <div className="mb-3 font-mono text-[10px] uppercase tracking-[0.35em] text-[var(--muted)]">
              Channels
            </div>
            <ul className="space-y-2 font-mono text-xs uppercase tracking-[0.2em]">
              <li>
                <a
                  href={contact.github.url}
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-[var(--accent)]"
                >
                  GitHub ↗
                </a>
              </li>
              <li>
                <a
                  href={contact.linkedin.url}
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-[var(--accent)]"
                >
                  LinkedIn ↗
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${contact.email}`}
                  className="hover:text-[var(--accent)]"
                >
                  Email ↗
                </a>
              </li>
            </ul>
          </div>
          <div>
            <div className="mb-3 font-mono text-[10px] uppercase tracking-[0.35em] text-[var(--muted)]">
              Colophon
            </div>
            <p className="text-sm leading-6 text-[var(--muted)]">
              Built with React, Vite, and Tailwind. Anton · Space Grotesk ·
              JetBrains Mono. Rev 2026.11.
            </p>
            <p className="mt-3 font-mono text-[10px] uppercase tracking-[0.3em] text-[var(--muted)]">
              © 2026 · Still compiling…
            </p>
          </div>
        </div>

        <div className="flex items-center gap-2 border-t-2 border-[var(--rule)] py-4">
          <span className="font-mono text-sm text-[var(--muted)]">+</span>
          <span className="h-px flex-1 bg-[var(--rule)]" />
          <span className="font-mono text-[10px] uppercase tracking-[0.35em] text-[var(--muted)]">
            END OF DOCUMENT · 5 SECTIONS · 1 AUTHOR
          </span>
          <span className="h-px flex-1 bg-[var(--rule)]" />
          <span className="font-mono text-sm text-[var(--muted)]">+</span>
        </div>
      </div>
    </footer>
  );
}
