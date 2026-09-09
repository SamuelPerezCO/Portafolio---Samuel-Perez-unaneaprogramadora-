"use client";

import Image from "next/image";
import { useLanguage } from "@/lib/language-context";
import { FOUNDER, STACK } from "@/lib/content";
import { Section } from "./Section";
import { Glyph } from "./Glyph";

/**
 * Nosotros. Left of the rule: the founder's photo in a square record frame,
 * the section name and two facts (founder, seat). Right of the rule: the
 * growth statement, the company paragraph, the founder's note, what is in
 * progress right now, and the stack as a key | rule | value ficha.
 *
 * Below 1024 the photo (120px) sits beside the facts in a [120px | 1fr] grid
 * and the section name follows; from 1024 the label column stacks photo →
 * section name → facts. Both orders come from the same DOM via `order`.
 */
export function About() {
  const { t } = useLanguage();

  return (
    <Section id="nosotros">
      <div className="lc grid grid-cols-[120px_minmax(0,1fr)] items-start gap-x-4 lg:flex lg:flex-col lg:items-start">
        <div className="shot order-1 h-[120px] w-[120px] overflow-hidden lg:h-[168px] lg:w-[168px]">
          <Image
            src={FOUNDER.photo}
            alt={t.about.photoAlt}
            width={168}
            height={168}
            className="h-full w-full object-cover"
            style={{ height: "100%", objectPosition: "50% 15%" }}
          />
        </div>

        <div className="order-2 lg:order-3 lg:mt-6">
          <p className="label">{t.about.founderLabel}</p>
          <p className="value mt-2">{FOUNDER.name}</p>
          <p className="label mt-6 lg:mt-8">{t.about.seatLabel}</p>
          <p className="value mt-2">{t.about.seat}</p>
        </div>

        <h2 className="sec-name order-3 col-span-2 mt-6 lg:order-2 lg:col-span-1">{t.about.title}</h2>
      </div>

      <div className="cc mt-6 lg:mt-0">
        <p className="statement">{t.about.statement}</p>
        <p className="prose mt-6">{t.about.p1}</p>

        <p className="label mt-8">{t.about.noteLabel}</p>
        <p className="prose mt-2">{t.about.founderNote}</p>

        <p className="label mt-8 inline-flex items-center gap-1">
          <Glyph on={false} />
          <span>{t.about.nowLabel}</span>
        </p>
        <p className="small mt-1">{t.about.now}</p>

        <dl className="ficha mt-8">
          {STACK.map((group) => (
            <div key={group.key}>
              <dt>{t.about.stack[group.key]}</dt>
              <dd>{group.items.join(" · ")}</dd>
            </div>
          ))}
        </dl>
      </div>
    </Section>
  );
}
