"use client";

import Image from "next/image";
import { ArrowDown, ArrowUpRight } from "lucide-react";
import { useLanguage } from "@/lib/language-context";
import { statusIsOn, CASE_STUDIES, whatsappUrl } from "@/lib/content";
import { Section } from "@/components/Section";
import { Glyph } from "@/components/Glyph";
import { WhatsappIcon } from "@/components/icons";

type Fact = { key: string; value: string; href?: string };

/**
 * Hero: one headline over the first case's real screenshot.
 * Desktop rows on Section's grid: facts | text, then shot-id | shot.
 * DOM order (the mobile stack): text → shot-id → shot → facts; on desktop
 * the four cells are placed explicitly with grid row/column starts.
 */
export function Hero() {
  const { lang, t } = useLanguage();
  const first = CASE_STUDIES[0];
  const copy = first[lang];
  const caseHref = `#${first.slug}`;
  const wa = whatsappUrl(lang);
  const status = t.work.statusValues[first.status];

  const facts: Fact[] = [
    t.hero.facts.seat,
    t.hero.facts.audience,
    { ...t.hero.facts.replies, href: wa },
  ];

  // RESPONDE opens WhatsApp in a new tab, so the name carries the spec's
  // trailing marker (glued to its last word so it never wraps alone) and the
  // accessible name states the destination.
  const factValue = (fact: Fact) => {
    if (!fact.href) return fact.value;
    const cut = fact.value.lastIndexOf(" ");
    const head = fact.value.slice(0, cut + 1);
    const last = fact.value.slice(cut + 1);
    return (
      <a href={fact.href} target="_blank" rel="noreferrer">
        {head}
        <span className="whitespace-nowrap">
          {last}
          <ArrowUpRight size={13} aria-hidden className="ml-1 inline-block align-[-2px]" />
        </span>
        <span className="sr-only"> · WhatsApp</span>
      </a>
    );
  };

  return (
    <Section id="top" className="sec-hero hero-field" spineClassName="spine-draw">
      {/* Row 1 · content: headline, lead, controls. */}
      <div className="cc lg:col-start-2 lg:row-start-1">
        <h1 className="h1 rise">{t.hero.headline}</h1>
        <p className="lead rise rise-2 mt-6">{t.hero.lead}</p>
        <div className="rise rise-3 mt-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:gap-6">
          <a className="btn btn-primary" href={wa} target="_blank" rel="noreferrer">
            <WhatsappIcon size={16} />
            {t.hero.ctaPrimary}
          </a>
          <a className="link min-h-11" href="#proyectos">
            {t.hero.ctaSecondary}
            <ArrowDown size={15} />
          </a>
        </div>
      </div>

      {/* Row 2 · identification: status, client and year. One label line on mobile
          (client only, without the end customer, so it stays on one line at 360). */}
      <div className="lc mt-8 lg:col-start-1 lg:row-start-2 lg:mt-16 lg:self-start">
        <a href={caseHref} className="block">
          <p className="label">
            <Glyph on={statusIsOn(first.status)} className="mr-1" />
            {status}
            <span className="lg:hidden">
              {" · "}
              {copy.kicker.split(" · ")[0]}
              {" · "}
              {first.year}
            </span>
          </p>
          <p className="value mt-2 hidden lg:block">{copy.kicker}</p>
          <p className="value hidden lg:block">{first.year}</p>
        </a>
      </div>

      {/* Row 2 · content: the real screenshot and its caption. */}
      <div className="cc mt-2 lg:col-start-2 lg:row-start-2 lg:mt-16">
        {first.image && (
          <figure className="hero-shot">
            <div className="shot">
              <Image
                src={first.image.src}
                alt={copy.imageAlt}
                width={first.image.width}
                height={first.image.height}
                loading="eager"
                fetchPriority="high"
                sizes="(min-width:1024px) 879px, 100vw"
              />
            </div>
            <figcaption className="caption mt-3">
              {copy.caption}{" · "}
              <a className="link not-italic" href={caseHref}>
                {t.hero.shotLink}
              </a>
            </figcaption>
          </figure>
        )}
      </div>

      {/* Row 1 · identification: the three facts. Last in DOM so they close the hero on mobile. */}
      <div className="lc rise rise-4 lg:col-start-1 lg:row-start-1">
        <dl className="ficha ficha-l mt-8 lg:mt-0">
          {facts.map((fact) => (
            <div key={fact.key}>
              <dt>{fact.key}</dt>
              <dd>{factValue(fact)}</dd>
            </div>
          ))}
        </dl>
      </div>
    </Section>
  );
}
