import { useState } from "react";
import { Menu, X, Sun, Moon } from "lucide-react";
import { navigationLinks } from "@/data/navigation";
import { useTheme } from "@/context/ThemeContext";
import { useActiveSection } from "@/hooks/useActiveSection";
import { cn } from "@/lib/cn";

export default function Navbar() {
  const { theme, toggle } = useTheme();
  const active = useActiveSection();
  const [open, setOpen] = useState(false);

  const isActive = (href: string) => active === href.replace("#", "");

  return (
    <header className="sticky top-0 z-50 border-b-2 border-[var(--border)] bg-[var(--background)]/95 backdrop-blur-sm">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-4 sm:px-6">
        <a href="#home" className="flex items-center gap-3 shrink-0">
          <div className="flex h-9 w-9 items-center justify-center bg-[var(--accent)] text-[var(--accent-fg)] font-mono text-sm font-bold">
            AL
          </div>
          <span className="hidden sm:block font-mono text-[10px] uppercase tracking-[0.3em] text-[var(--muted)]">
            Portfolio — 2026
          </span>
        </a>

        <nav className="hidden md:flex items-center gap-1">
          {navigationLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={cn(
                "px-3 py-1.5 font-mono text-[11px] uppercase tracking-wider transition-colors",
                isActive(link.href)
                  ? "bg-[var(--accent)] text-[var(--accent-fg)] font-bold"
                  : "text-[var(--muted)] hover:text-[var(--text)]",
              )}
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2 shrink-0">
          <button
            onClick={toggle}
            aria-label="Toggle theme"
            className="flex h-9 w-9 items-center justify-center border-2 border-[var(--border)] bg-[var(--surface)] transition-all active:translate-x-[1px] active:translate-y-[1px]"
          >
            {theme === "dark" ? <Sun size={15} /> : <Moon size={15} />}
          </button>
          <button
            onClick={() => setOpen((o) => !o)}
            aria-label="Toggle menu"
            className="flex h-9 w-9 items-center justify-center border-2 border-[var(--border)] bg-[var(--surface)] md:hidden transition-all active:translate-x-[1px] active:translate-y-[1px]"
          >
            {open ? <X size={15} /> : <Menu size={15} />}
          </button>
        </div>
      </div>

      {open && (
        <div className="border-t-2 border-[var(--border)] md:hidden">
          <nav className="mx-auto flex max-w-7xl flex-col px-4 py-2 sm:px-6">
            {navigationLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className={cn(
                  "px-3 py-3 font-mono text-xs uppercase tracking-wider transition-colors",
                  isActive(link.href)
                    ? "text-[var(--accent)] font-bold"
                    : "text-[var(--muted)] hover:text-[var(--text)]",
                )}
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
