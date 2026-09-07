"use client";

import { ArrowUp } from "lucide-react";
import { useLanguage } from "@/lib/language-context";
import { PROFILE } from "@/lib/content";

export function Footer() {
  const { t } = useLanguage();
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-line">
      <div className="mx-auto flex max-w-[1200px] flex-col gap-3 px-6 py-8 font-display text-[13px] text-ink-2 sm:flex-row sm:items-center sm:justify-between md:px-10">
        <p>
          © {year} {PROFILE.name} · {t.footer.location}
        </p>
        <a href="#top" className="inline-flex items-center gap-1.5 transition-colors hover:text-ink">
          {t.footer.backToTop} <ArrowUp size={13} />
        </a>
      </div>
    </footer>
  );
}
