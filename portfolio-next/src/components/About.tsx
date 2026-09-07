"use client";

import { useLanguage } from "@/lib/language-context";
import { STACK } from "@/lib/content";

export function About() {
  const { t } = useLanguage();

  return (
    <section id="sobre-mi" className="scroll-mt-20 border-t border-line">
      <div className="mx-auto max-w-[1200px] px-6 py-20 md:px-10 md:py-28">
        <div className="grid gap-12 md:grid-cols-[minmax(0,7fr)_minmax(0,5fr)] md:gap-20">
          <div>
            <h2 className="display-tight text-4xl font-bold text-ink md:text-5xl">{t.about.title}</h2>
            <p className="mt-8 max-w-[40rem] text-[1.15rem] leading-relaxed text-ink">{t.about.p1}</p>
            <p className="mt-5 max-w-[40rem] text-[1.15rem] leading-relaxed text-ink">{t.about.p2}</p>
            <p className="mt-8 border-l-2 border-accent pl-4 text-ink-2">{t.about.now}</p>
          </div>

          <dl className="ficha self-start md:mt-3">
            {STACK.map((group) => (
              <div key={group.key}>
                <dt>{t.about.stack[group.key]}</dt>
                <dd>{group.items.join(" · ")}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
