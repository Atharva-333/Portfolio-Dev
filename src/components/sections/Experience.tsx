import Sheet from "@/components/chrome/Sheet";
import Tag from "@/components/ui/Tag";
import { experience } from "@/data/portfolio";

export default function Experience() {
  return (
    <Sheet
      id="experience"
      number="02"
      label="Experience"
      title="The Log."
      subtitle="Every role has been another chance to learn, experiment, and figure things out beyond the classroom."
    >
      <div className="border-t-2 border-[var(--rule)]">
        {experience.map((exp, i) => (
          <div key={i} className="border-b-2 border-[var(--rule)] py-8">
            <div className="grid gap-6 md:grid-cols-[8rem_1fr]">
              {/* Year gutter */}
              <div className="flex flex-col gap-1">
                <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-[var(--muted)]">
                  Period
                </span>
                <span className="font-mono text-sm font-medium">
                  {exp.duration}
                </span>
                <span className="mt-2 inline-flex w-fit items-center gap-1.5 border border-[var(--rule)] px-2 py-0.5 font-mono text-[10px] uppercase tracking-wider">
                  <span className="h-1.5 w-1.5 bg-[var(--ok)]" />
                  Done
                </span>
              </div>

              {/* Content */}
              <div>
                <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                  <h3 className="font-display text-3xl leading-none sm:text-4xl">
                    {exp.role}
                  </h3>
                  <span className="font-mono text-[11px] uppercase tracking-[0.3em] text-[var(--muted)]">
                    @ {exp.company}
                  </span>
                </div>

                <p className="mt-4 max-w-3xl text-sm leading-7 text-[var(--muted)]">
                  {exp.description}
                </p>

                <div className="mt-6 grid gap-6 md:grid-cols-2">
                  <div>
                    <div className="mb-2 font-mono text-[10px] uppercase tracking-[0.3em] text-[var(--muted)]">
                      Responsibilities
                    </div>
                    <ul className="space-y-1.5">
                      {exp.responsibilities.map((r) => (
                        <li
                          key={r}
                          className="flex items-baseline gap-2 text-sm"
                        >
                          <span className="font-mono text-[var(--muted)]">
                            →
                          </span>
                          <span>{r}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <div className="mb-2 font-mono text-[10px] uppercase tracking-[0.3em] text-[var(--muted)]">
                      Stack
                    </div>
                    <div className="flex flex-wrap gap-1.5">
                      {exp.technologies.map((t) => (
                        <Tag key={t}>{t}</Tag>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </Sheet>
  );
}
