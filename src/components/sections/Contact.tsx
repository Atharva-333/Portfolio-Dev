import { useState, type ReactNode } from "react";
import Sheet from "@/components/chrome/Sheet";
import Button from "@/components/ui/Button";
import { contact } from "@/data/portfolio";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = `Portfolio contact from ${form.name}`;
    const body = `From: ${form.name} <${form.email}>\n\n${form.message}`;
    window.location.href = `mailto:${contact.email}?subject=${encodeURIComponent(
      subject,
    )}&body=${encodeURIComponent(body)}`;
  };

  const channels = [
    { label: "EMAIL", value: contact.email, href: `mailto:${contact.email}` },
    {
      label: "GITHUB",
      value: `@${contact.github.username}`,
      href: contact.github.url,
    },
    {
      label: "LINKEDIN",
      value: `@${contact.linkedin.username}`,
      href: contact.linkedin.url,
    },
    { label: "LOCATION", value: contact.location, href: null },
  ];

  return (
    <Sheet
      id="contact"
      number="05"
      label="Contact"
      title="The End."
      subtitle="Have a project in mind, or just want to say hi? Fill in the form or reach out through any channel."
    >
      <div className="grid gap-4 lg:grid-cols-5">
        {/* Form */}
        <form
          onSubmit={handleSubmit}
          className="border-2 border-[var(--rule)] bg-[var(--surface)] lg:col-span-3"
        >
          <div className="flex items-center justify-between border-b-2 border-[var(--rule)] bg-[var(--panel)] px-4 py-2 text-[var(--panel-fg)]">
            <span className="font-mono text-[10px] uppercase tracking-[0.35em]">
              Message Form
            </span>
            <span className="font-mono text-[10px] uppercase tracking-[0.2em]">
              F-01
            </span>
          </div>

          <div className="space-y-5 p-5 sm:p-6">
            <div className="grid gap-5 sm:grid-cols-2">
              <Field label="01 · Name">
                <input
                  required
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="w-full bg-transparent text-base outline-none placeholder:text-[var(--muted)]"
                  placeholder="Jane Doe"
                />
              </Field>
              <Field label="02 · Email">
                <input
                  type="email"
                  required
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className="w-full bg-transparent text-base outline-none placeholder:text-[var(--muted)]"
                  placeholder="you@example.com"
                />
              </Field>
            </div>
            <Field label="03 · Message">
              <textarea
                required
                rows={5}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                className="w-full resize-none bg-transparent text-base outline-none placeholder:text-[var(--muted)]"
                placeholder="Tell me about your project…"
              />
            </Field>
            <Button type="submit" className="w-full">
              Send Message →
            </Button>
          </div>
        </form>

        {/* Channels as data table */}
        <div className="border-2 border-[var(--rule)] bg-[var(--surface)] lg:col-span-2">
          <div className="flex items-center justify-between border-b-2 border-[var(--rule)] bg-[var(--panel)] px-4 py-2 text-[var(--panel-fg)]">
            <span className="font-mono text-[10px] uppercase tracking-[0.35em]">
              Channels
            </span>
            <span className="font-mono text-[10px] uppercase tracking-[0.2em]">
              [{channels.length}]
            </span>
          </div>
          <ul className="divide-y divide-[var(--rule)]">
            {channels.map((c, i) => {
              const inner = (
                <div className="flex items-baseline gap-3 px-4 py-4">
                  <span className="font-mono text-[10px] tabular-nums text-[var(--muted)]">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div className="min-w-0 flex-1">
                    <div className="font-mono text-[10px] uppercase tracking-[0.3em] text-[var(--muted)]">
                      {c.label}
                    </div>
                    <div className="mt-1 truncate text-sm font-medium">
                      {c.value}
                    </div>
                  </div>
                  {c.href && (
                    <span className="font-mono text-xs text-[var(--muted)]">
                      ↗
                    </span>
                  )}
                </div>
              );
              return (
                <li key={c.label}>
                  {c.href ? (
                    <a
                      href={c.href}
                      target={c.href.startsWith("http") ? "_blank" : undefined}
                      rel={c.href.startsWith("http") ? "noreferrer" : undefined}
                      className="block transition-colors hover:bg-[var(--panel)]"
                    >
                      {inner}
                    </a>
                  ) : (
                    inner
                  )}
                </li>
              );
            })}
          </ul>
          <div className="border-t-2 border-[var(--rule)] px-4 py-3">
            <div className="flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.25em]">
              <span className="h-1.5 w-1.5 bg-[var(--ok)]" />
              Response within 24–48h
            </div>
          </div>
        </div>
      </div>
    </Sheet>
  );
}

function Field({ label, children }: { label: string; children: ReactNode }) {
  return (
    <label className="block">
      <div className="mb-1.5 font-mono text-[10px] uppercase tracking-[0.3em] text-[var(--muted)]">
        {label}
      </div>
      <div className="border-b-2 border-[var(--rule)] pb-2 focus-within:border-[var(--accent)]">
        {children}
      </div>
    </label>
  );
}
