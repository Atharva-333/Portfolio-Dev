import Sheet from "@/components/chrome/Sheet";
import Tag from "@/components/ui/Tag";
import { projects } from "@/data/portfolio";

export default function Projects() {
  return (
    <Sheet
      id="projects"
      number="03"
      label="Projects"
      title="The Builds."
      subtitle="A collection of ideas turned into projects, experiments, and applications — some solve problems, others satisfy curiosity."
    >
      <div className="grid gap-8 md:grid-cols-2 md:gap-6">
        {projects.map((project, i) => (
          <article key={project.id} className="relative pt-2">
            {/* File tab — sits above the card, merges into it */}
            <div className="relative z-10 inline-flex -mb-[2px] items-center gap-2 border-2 border-b-0 border-[var(--rule)] bg-[var(--surface)] px-3 py-1 font-mono text-[10px] uppercase tracking-wider">
              <span className="h-1.5 w-1.5 bg-[var(--accent)]" />
              {String(i + 1).padStart(2, "0")}.HTML
              {project.featured && (
                <span className="ml-1 text-[var(--muted)]">· FEATURED</span>
              )}
            </div>

            <div className="relative border-2 border-[var(--rule)] bg-[var(--surface)]">
              {/* image */}
              <div className="relative aspect-[16/10] overflow-hidden border-b-2 border-[var(--rule)]">
                <img
                  src={project.image}
                  alt={project.title}
                  loading="lazy"
                  className="h-full w-full object-cover"
                />
              </div>

              {/* content */}
              <div className="p-5">
                <h3 className="font-display text-2xl leading-none">
                  {project.title}
                </h3>
                <p className="mt-1 font-mono text-[10px] uppercase tracking-[0.25em] text-[var(--muted)]">
                  {project.subtitle}
                </p>
                <p className="mt-3 text-sm leading-6 text-[var(--muted)]">
                  {project.description}
                </p>
                <div className="mt-4 flex flex-wrap gap-1.5">
                  {project.technologies.map((t) => (
                    <Tag key={t}>{t}</Tag>
                  ))}
                </div>
              </div>

              {/* footer links */}
              <div className="flex items-center justify-between border-t-2 border-[var(--rule)] px-5 py-3">
                <div className="flex gap-4 font-mono text-[10px] uppercase tracking-[0.25em]">
                  {project.github ? (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noreferrer"
                      className="hover:text-[var(--accent)]"
                    >
                      GitHub ↗
                    </a>
                  ) : (
                    <span className="text-[var(--muted)]">PRIVATE</span>
                  )}
                  {project.live ? (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noreferrer"
                      className="hover:text-[var(--accent)]"
                    >
                      LIVE ↗
                    </a>
                  ) : (
                    <span className="text-[var(--muted)]">—</span>
                  )}
                </div>
                <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-[var(--muted)]">
                  {String(i + 1).padStart(2, "0")} /{" "}
                  {String(projects.length).padStart(2, "0")}
                </span>
              </div>
            </div>
          </article>
        ))}
      </div>
    </Sheet>
  );
}
