"use client";

import { ArrowUp } from "lucide-react";
import { useLanguage } from "@/lib/language-context";
import { PROFILE } from "@/lib/content";

export function Footer() {
  const { t } = useLanguage();
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border py-8">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 font-mono-display text-xs text-muted sm:flex-row">
        <p>
          © {year} {PROFILE.name} — {t.footer.rights}
        </p>
        <div className="flex items-center gap-4">
          <span>{t.footer.built}</span>
          <a href="#top" className="flex items-center gap-1 transition-colors hover:text-accent">
            {t.footer.backToTop} <ArrowUp size={12} />
          </a>
        </div>
      </div>
    </footer>
  );
}
