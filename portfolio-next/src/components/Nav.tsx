"use client";

import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { Menu, Moon, Sun, X } from "lucide-react";
import { useLanguage } from "@/lib/language-context";
import { PROFILE } from "@/lib/content";

export function Nav() {
  const { lang, toggleLang, t } = useLanguage();
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => setMounted(true), []);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    { href: "#skills", label: t.nav.skills },
    { href: "#projects", label: t.nav.projects },
    { href: "#contact", label: t.nav.contact },
  ];

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        scrolled ? "border-b border-border bg-bg/85 backdrop-blur-md" : "border-b border-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a href="#top" className="font-mono-display text-sm font-medium tracking-tight text-fg">
          <span className="text-accent">&gt;</span> {PROFILE.initials}<span className="text-muted">.dev</span>
        </a>

        <ul className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="font-mono-display text-xs uppercase tracking-widest text-muted transition-colors hover:text-accent"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden items-center gap-3 md:flex">
          <button
            onClick={toggleLang}
            className="rounded border border-border px-2.5 py-1.5 font-mono-display text-xs text-muted transition-colors hover:border-accent hover:text-accent"
            aria-label="Toggle language"
          >
            {lang === "es" ? "EN" : "ES"}
          </button>
          <button
            onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
            className="rounded border border-border p-1.5 text-muted transition-colors hover:border-accent hover:text-accent"
            aria-label="Toggle theme"
          >
            {mounted && resolvedTheme === "dark" ? <Sun size={14} /> : <Moon size={14} />}
          </button>
        </div>

        <button
          className="text-fg md:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label={t.nav.menu}
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>

      {open && (
        <div className="border-t border-border bg-bg px-6 py-4 md:hidden">
          <ul className="flex flex-col gap-4">
            {links.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="font-mono-display text-sm uppercase tracking-widest text-muted"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <div className="mt-4 flex items-center gap-3">
            <button
              onClick={toggleLang}
              className="rounded border border-border px-2.5 py-1.5 font-mono-display text-xs text-muted"
            >
              {lang === "es" ? "EN" : "ES"}
            </button>
            <button
              onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
              className="rounded border border-border p-1.5 text-muted"
              aria-label="Toggle theme"
            >
              {mounted && resolvedTheme === "dark" ? <Sun size={14} /> : <Moon size={14} />}
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
