import { useState } from "react";
import { Menu, X, Sun, Moon } from "lucide-react";
import { navigationLinks } from "@/data/navigation";
import { useTheme } from "@/context/ThemeContext";
import { useActiveSection } from "@/hooks/useActiveSection";
import { cn } from "@/lib/cn";

export default function Masthead() {
  const { theme, toggle } = useTheme();
  const active = useActiveSection();
  const [open, setOpen] = useState(false);
  const isActive = (href: string) => active === href.replace("#", "");

  return (
    <header className="sticky top-0 z-50 border-b-2 border-[var(--rule)] bg-[var(--bg)]/95 backdrop-blur-sm">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3 sm:px-6 lg:px-10">
        {/* Document id */}
        <a href="#home" className="flex items-center gap-3">
          <span className="bg-[var(--accent)] px-2 py-1 font-mono text-[10px] font-bold uppercase tracking-wider text-[var(--accent-fg)]">
            DOC.001
          </span>
          <span className="hidden font-mono text-[10px] uppercase tracking-[0.3em] text-[var(--muted)] sm:inline">
            Atharva Lohar · Portfolio
          </span>
        </a>

        {/* Nav as inline doc refs */}
        <nav className="hidden items-center gap-1 md:flex">
          {navigationLinks.map((link, i) => (
            <a
              key={link.href}
              href={link.href}
              className={cn(
                "px-2 py-1 font-mono text-[11px] uppercase tracking-wider transition-colors",
                isActive(link.href)
                  ? "bg-[var(--fg)] text-[var(--bg)]"
                  : "text-[var(--muted)] hover:text-[var(--fg)]",
              )}
            >
              <span className="mr-1 opacity-50">
                {String(i + 1).padStart(2, "0")}
              </span>
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <span className="hidden font-mono text-[10px] uppercase tracking-[0.3em] text-[var(--muted)] lg:inline">
            REV.2026.11
          </span>
          <button
            onClick={toggle}
            aria-label="Toggle theme"
            className="flex h-8 w-8 items-center justify-center border-2 border-[var(--rule)] bg-[var(--surface)] transition-colors hover:border-[var(--fg)]"
          >
            {theme === "dark" ? <Sun size={13} /> : <Moon size={13} />}
          </button>
          <button
            onClick={() => setOpen((o) => !o)}
            aria-label="Toggle menu"
            className="flex h-8 w-8 items-center justify-center border-2 border-[var(--rule)] bg-[var(--surface)] md:hidden"
          >
            {open ? <X size={13} /> : <Menu size={13} />}
          </button>
        </div>
      </div>

      {open && (
        <nav className="border-t-2 border-[var(--rule)] md:hidden">
          {navigationLinks.map((link, i) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className={cn(
                "flex items-center gap-3 border-b border-[var(--rule)] px-4 py-3 font-mono text-xs uppercase tracking-wider last:border-b-0",
                isActive(link.href)
                  ? "bg-[var(--fg)] text-[var(--bg)]"
                  : "text-[var(--muted)]",
              )}
            >
              <span className="opacity-50">
                {String(i + 1).padStart(2, "0")}
              </span>
              {link.label}
            </a>
          ))}
        </nav>
      )}
    </header>
  );
}
