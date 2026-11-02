import { navigationLinks } from "@/data/navigation";
import { contact, experience, projects, technologies } from "@/data/portfolio";
import Button from "@/components/ui/Button";
import Tag from "@/components/ui/Tag";
import Marquee from "@/components/ui/Marquee";

export default function Hero() {
  const meta = [
    ["SUBJECT", "Atharva Lohar"],
    ["ROLE", "Software Developer"],
    ["LOCATION", contact.location],
    ["YEAR", "2026"],
  ];
  const manifest = navigationLinks.map((l, i) => ({
    idx: String(i + 1).padStart(2, "0"),
    label: l.label,
    href: l.href,
  }));

  return (
    <section id="home" className="scroll-mt-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">
        {/* sheet ribbon */}
        <div className="flex items-center gap-2 pt-10 sm:pt-14">
          <span className="font-mono text-sm leading-none text-[var(--muted)]">
            +
          </span>
          <span className="h-px flex-1 bg-[var(--rule)]" />
          <span className="font-mono text-sm leading-none text-[var(--muted)]">
            +
          </span>
        </div>

        <div className="mt-5 flex flex-wrap items-center gap-3">
          <span className="inline-flex items-center bg-[var(--accent)] px-2.5 py-1 font-mono text-xs font-bold uppercase tracking-wider text-[var(--accent-fg)]">
            §01
          </span>
          <span className="h-px w-8 bg-[var(--rule)]" />
          <span className="font-mono text-[10px] uppercase tracking-[0.35em] text-[var(--muted)]">
            Cover Sheet
          </span>
          <span className="ml-auto font-mono text-[10px] uppercase tracking-[0.35em] text-[var(--muted)]">
            01 / 05
          </span>
        </div>

        {/* Big name */}
        <div className="mt-10 relative">
          <span
            aria-hidden
            className="pointer-events-none absolute -top-10 right-0 select-none font-display text-[clamp(8rem,26vw,20rem)] leading-none text-[var(--rule)] opacity-60"
          >
            01
          </span>

          <h1 className="font-display relative text-[clamp(3.5rem,13vw,11rem)] text-[var(--fg)]">
            ATHARVA
          </h1>

          <div className="mt-2 inline-flex max-w-full items-center gap-4 bg-[var(--accent)] px-4 py-2 text-[var(--accent-fg)]">
            <span className="font-display text-[clamp(2rem,8vw,7rem)] leading-[0.85]">
              LOHAR.
            </span>
            <span className="hidden font-mono text-[11px] uppercase tracking-[0.35em] sm:inline">
              Software Developer
            </span>
          </div>
        </div>

        {/* Dossier + Manifest */}
        <div className="mt-10 grid gap-4 md:grid-cols-2">
          {/* Dossier */}
          <div className="border-2 border-[var(--rule)] bg-[var(--surface)]">
            <div className="flex items-center justify-between border-b-2 border-[var(--rule)] bg-[var(--panel)] px-4 py-2 text-[var(--panel-fg)]">
              <span className="font-mono text-[10px] uppercase tracking-[0.35em]">
                Dossier
              </span>
              <span className="font-mono text-[10px] uppercase tracking-[0.2em]">
                / 4 fields
              </span>
            </div>
            <dl className="divide-y divide-[var(--rule)]">
              {meta.map(([k, v]) => (
                <div key={k} className="flex items-baseline gap-3 px-4 py-3">
                  <dt className="w-24 shrink-0 font-mono text-[10px] uppercase tracking-[0.3em] text-[var(--muted)]">
                    {k}
                  </dt>
                  <dd className="text-sm font-medium">{v}</dd>
                </div>
              ))}
              <div className="flex items-baseline gap-3 px-4 py-3">
                <dt className="w-24 shrink-0 font-mono text-[10px] uppercase tracking-[0.3em] text-[var(--muted)]">
                  STATUS
                </dt>
                <dd className="flex items-center gap-2 text-sm font-medium">
                  <span className="h-2 w-2 bg-[var(--ok)]" />
                  Available for work
                </dd>
              </div>
            </dl>
          </div>

          {/* Manifest */}
          <div className="border-2 border-[var(--rule)] bg-[var(--surface)]">
            <div className="flex items-center justify-between border-b-2 border-[var(--rule)] bg-[var(--panel)] px-4 py-2 text-[var(--panel-fg)]">
              <span className="font-mono text-[10px] uppercase tracking-[0.35em]">
                Manifest
              </span>
              <span className="font-mono text-[10px] uppercase tracking-[0.2em]">
                / {manifest.length} sections
              </span>
            </div>
            <ul>
              {manifest.map((m) => (
                <li
                  key={m.href}
                  className="border-b border-[var(--rule)] last:border-b-0"
                >
                  <a
                    href={m.href}
                    className="group flex items-center justify-between px-4 py-3 transition-colors hover:bg-[var(--panel)]"
                  >
                    <span className="flex items-center gap-3">
                      <span className="font-mono text-[11px] tabular-nums text-[var(--muted)]">
                        {m.idx}
                      </span>
                      <span className="font-mono text-xs uppercase tracking-[0.25em]">
                        {m.label}
                      </span>
                    </span>
                    <span className="font-mono text-xs text-[var(--muted)] transition-transform group-hover:translate-x-1">
                      →
                    </span>
                  </a>
                </li>
              ))}
            </ul>
            <div className="border-t-2 border-[var(--rule)] p-4">
              <div className="mb-3 flex flex-wrap gap-1.5">
                {technologies.slice(0, 6).map((t) => (
                  <Tag key={t.name}>{t.name}</Tag>
                ))}
                <Tag>+{technologies.length - 6}</Tag>
              </div>
              <div className="flex flex-wrap gap-2">
                <Button href="#projects">View Work →</Button>
                <Button href="#contact" variant="ghost">
                  Contact
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Quick stat strip */}
        <div className="mt-4 grid grid-cols-2 gap-4 border-2 border-[var(--rule)] p-0 sm:grid-cols-4">
          {[
            ["PROJECTS", String(projects.length).padStart(2, "0")],
            ["STACK", String(technologies.length).padStart(2, "0")],
            ["ROLES", String(experience.length).padStart(2, "0")],
            ["YEAR", "2026"],
          ].map(([k, v], i, arr) => (
            <div
              key={k}
              className={`flex flex-col gap-1 px-4 py-4 ${
                i < arr.length - 1
                  ? "border-b-2 sm:border-b-0 sm:border-r-2 border-[var(--rule)]"
                  : ""
              }`}
            >
              <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-[var(--muted)]">
                {k}
              </span>
              <span className="font-display text-4xl leading-none">{v}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-12">
        <Marquee
          items={[
            "Available for work",
            "Full-stack",
            "AI / ML",
            "Software developer",
            "2026",
            "Open to opportunities",
          ]}
        />
      </div>
    </section>
  );
}
