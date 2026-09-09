"use client";

import { Section } from "@/components/Section";
import { Glyph } from "@/components/Glyph";
import { TESTIMONIALS, type Lang, type Testimonial } from "@/lib/content";
import { useLanguage } from "@/lib/language-context";

/** A slot counts as filled once it carries a real quote in the current language. */
function hasQuote(item: Testimonial, lang: Lang): boolean {
  return item[lang].quote.trim().length > 0;
}

/** 1 → "01": the slot ordinal, the only numbering allowed on the page. */
function pad(n: number): string {
  return String(n).padStart(2, "0");
}

type SlotProps = {
  item: Testimonial;
  /** 1-based position of the slot. */
  index: number;
  total: number;
};

/**
 * One testimonial slot. Empty: a dashed form with QUIÉN / EMPRESA / DIJO rows and
 * em-dash values. Filled: a solid surface with the quote, the name and the role.
 * The two states share this component; the classes are the only difference.
 */
function Slot({ item, index, total }: SlotProps) {
  const { lang, t } = useLanguage();
  const copy = item[lang];

  if (hasQuote(item, lang)) {
    return (
      <figure className="slot slot-filled">
        <blockquote>
          <p className="prose">{copy.quote}</p>
        </blockquote>
        <figcaption className="mt-3">
          <p className="value">{copy.name}</p>
          <p className="small">{copy.role}</p>
        </figcaption>
      </figure>
    );
  }

  const ariaLabel = t.testimonials.slotAria
    .replace("{i}", String(index))
    .replace("{n}", String(total));

  return (
    <div className="slot" role="group" aria-label={ariaLabel}>
      <p className="label">
        {t.testimonials.slot} · {pad(index)}/{pad(total)}
      </p>
      <dl className="ficha mt-3">
        <div>
          <dt>{t.testimonials.who}</dt>
          <dd>
            <span className="text-ink-2">—</span>
          </dd>
        </div>
        <div>
          <dt>{t.testimonials.company}</dt>
          <dd>
            <span className="text-ink-2">—</span>
          </dd>
        </div>
        <div>
          <dt>{t.testimonials.said}</dt>
          <dd>
            <span className="text-ink-2">—</span>
          </dd>
        </div>
      </dl>
    </div>
  );
}

export function Testimonials() {
  const { lang, t } = useLanguage();
  const total = TESTIMONIALS.length;
  const filled = TESTIMONIALS.filter((item) => hasQuote(item, lang)).length;
  const live = filled > 0;

  return (
    <Section id="testimonios" className="sec-tight">
      <div className="lc">
        <h2 className="sec-name">{t.testimonials.title}</h2>
        {/* Below 1024 the status and the counter share one line, as in the hero and Más trabajo. */}
        <div className="mt-6 flex flex-wrap items-baseline gap-x-2 lg:block">
          <p className="label">
            <Glyph on={live} className="mr-1" />
            {live ? t.testimonials.received : t.testimonials.pending}
          </p>
          <span className="label lg:hidden" aria-hidden="true">
            ·
          </span>
          <p className="value lg:mt-2">
            {filled} {t.testimonials.counter} {total}
          </p>
        </div>
      </div>

      <div className="cc">
        <p className="statement-sm mt-6 lg:mt-0">{t.testimonials.statement}</p>
        <p className="small mt-3 max-w-[40rem]">{t.testimonials.intro}</p>
        <div className="mt-6 grid gap-3 md:grid-cols-3">
          {TESTIMONIALS.map((item, i) => (
            <Slot key={item.id} item={item} index={i + 1} total={total} />
          ))}
        </div>
      </div>
    </Section>
  );
}
