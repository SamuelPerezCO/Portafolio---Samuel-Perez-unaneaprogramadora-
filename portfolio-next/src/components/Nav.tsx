"use client";

import { useState, useSyncExternalStore } from "react";
import { useTheme } from "next-themes";
import { Menu, Moon, Sun, X } from "lucide-react";
import { useLanguage } from "@/lib/language-context";
import { PROFILE } from "@/lib/content";

function subscribeToScroll(callback: () => void) {
  window.addEventListener("scroll", callback, { passive: true });
  return () => window.removeEventListener("scroll", callback);
}

const getScrolled = () => window.scrollY > 8;
const getScrolledOnServer = () => false;

// True only after hydration, so the theme icon never mismatches the server render.
const noop = () => () => {};
const getMounted = () => true;
const getMountedOnServer = () => false;

export function Nav() {
  const { lang, toggleLang, t } = useLanguage();
  const { resolvedTheme, setTheme } = useTheme();
  const [open, setOpen] = useState(false);
  const scrolled = useSyncExternalStore(subscribeToScroll, getScrolled, getScrolledOnServer);
  const mounted = useSyncExternalStore(noop, getMounted, getMountedOnServer);

  const links = [
    { href: "#proyectos", label: t.nav.projects },
    { href: "#sobre-mi", label: t.nav.about },
    { href: "#contacto", label: t.nav.contact },
  ];

  const toggleTheme = () => setTheme(resolvedTheme === "dark" ? "light" : "dark");

  const controls = (
    <>
      <button
        type="button"
        onClick={toggleLang}
        className="label rounded-md border border-line px-2.5 py-1.5 transition-colors hover:border-ink hover:text-ink"
        aria-label={t.nav.language}
      >
        {lang === "es" ? "EN" : "ES"}
      </button>
      <button
        type="button"
        onClick={toggleTheme}
        className="rounded-md border border-line p-1.5 text-ink-2 transition-colors hover:border-ink hover:text-ink"
        aria-label={t.nav.theme}
      >
        {mounted && resolvedTheme === "dark" ? <Sun size={15} /> : <Moon size={15} />}
      </button>
    </>
  );

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 border-b bg-paper/90 backdrop-blur-md transition-[border-color] duration-300 ${
        scrolled || open ? "border-line" : "border-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-[1200px] items-center justify-between px-6 py-4 md:px-10">
        <a href="#top" className="font-display text-[15px] font-semibold tracking-tight text-ink">
          {PROFILE.name}
        </a>

        <ul className="hidden items-center gap-7 md:flex">
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="font-display text-sm font-medium text-ink-2 transition-colors hover:text-ink"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden items-center gap-2 md:flex">{controls}</div>

        <button
          type="button"
          className="text-ink md:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label={t.nav.menu}
          aria-expanded={open}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {open && (
        <div className="px-6 pb-6 md:hidden">
          <ul className="flex flex-col gap-4">
            {links.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="font-display text-lg font-medium text-ink"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <div className="mt-5 flex items-center gap-2">{controls}</div>
        </div>
      )}
    </header>
  );
}
