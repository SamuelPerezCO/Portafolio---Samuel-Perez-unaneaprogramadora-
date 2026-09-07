"use client";

import Image from "next/image";
import { ArrowDown, MessageCircle } from "lucide-react";
import { useLanguage } from "@/lib/language-context";
import { PROFILE, whatsappUrl } from "@/lib/content";

export function Hero() {
  const { lang, t } = useLanguage();

  return (
    <section id="top" className="mx-auto max-w-[1200px] px-6 pt-32 pb-16 md:px-10 md:pt-44 md:pb-24">
      <div className="grid gap-12 md:grid-cols-[minmax(0,7fr)_minmax(0,5fr)] md:items-end">
        <div>
          <p className="label rise">{t.hero.eyebrow}</p>
          <h1 className="display-tight rise rise-2 mt-5 text-[2.75rem] font-bold leading-[0.98] text-ink sm:text-6xl md:text-[5.25rem]">
            {t.hero.headline}
          </h1>
          <p className="rise rise-3 mt-7 max-w-[36rem] text-[1.2rem] leading-relaxed text-ink-2">
            {t.hero.sub}
          </p>
          <div className="rise rise-4 mt-9 flex flex-wrap gap-3">
            <a href="#proyectos" className="btn btn-primary">
              {t.hero.ctaPrimary} <ArrowDown size={16} />
            </a>
            <a href={whatsappUrl(lang)} target="_blank" rel="noreferrer" className="btn btn-secondary">
              <MessageCircle size={16} /> {t.hero.ctaSecondary}
            </a>
          </div>
        </div>

        <figure className="rise rise-3 md:justify-self-end">
          <Image
            src={PROFILE.photo}
            alt={t.hero.photoAlt}
            width={460}
            height={460}
            priority
            className="w-full max-w-[300px] rounded-xl border border-line-strong shadow-[var(--shadow)] md:max-w-[380px]"
          />
          <figcaption className="label mt-3">{t.hero.photoCaption}</figcaption>
        </figure>
      </div>
    </section>
  );
}
