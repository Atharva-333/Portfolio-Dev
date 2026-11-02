import Sheet from "@/components/chrome/Sheet";
import { skillCategories } from "@/data/portfolio";

export default function Skills() {
  return (
    <Sheet
      id="skills"
      number="04"
      label="Skills"
      title="The Stack."
      subtitle="Tools, languages, and frameworks I use to turn ideas into working systems."
    >
      <div className="grid gap-4 md:grid-cols-2">
        {skillCategories.map((cat, i) => (
          <div
            key={cat.title}
            className="border-2 border-[var(--rule)] bg-[var(--surface)]"
          >
            <div className="flex items-center justify-between border-b-2 border-[var(--rule)] bg-[var(--panel)] px-4 py-2 text-[var(--panel-fg)]">
              <div className="flex items-center gap-3">
                <span className="font-mono text-[10px] uppercase tracking-[0.35em]">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="font-mono text-[10px] uppercase tracking-[0.35em]">
                  {cat.title}
                </span>
              </div>
              <span className="font-mono text-[10px] uppercase tracking-wider">
                [{String(cat.skills.length).padStart(2, "0")}]
              </span>
            </div>

            <ul className="divide-y divide-[var(--rule)]">
              {cat.skills.map((skill, j) => (
                <li
                  key={skill}
                  className="flex items-baseline gap-3 px-4 py-3 font-mono text-sm"
                >
                  <span className="text-[10px] tabular-nums text-[var(--muted)]">
                    {String(j + 1).padStart(2, "0")}
                  </span>
                  <span className="font-medium tracking-wide">{skill}</span>
                  <span
                    aria-hidden
                    className="mx-1 flex-1 self-end border-b border-dotted border-[var(--rule)] pb-1"
                  />
                  <span className="h-1.5 w-1.5 bg-[var(--accent)]" />
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Sheet>
  );
}
