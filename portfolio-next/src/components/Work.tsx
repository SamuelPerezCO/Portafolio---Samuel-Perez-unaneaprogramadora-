"use client";

import { Fragment } from "react";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { useLanguage } from "@/lib/language-context";
import { CASE_STUDIES, plural, type CaseStudy } from "@/lib/content";
import { Section } from "./Section";
import { Glyph } from "./Glyph";
import { GithubIcon } from "./icons";

const SHOT_SIZES = "(min-width:1024px) 879px, 100vw";

/**
 * Identification for one case: CLIENTE / SECTOR / TIPO / ESTADO / STACK / AÑO.
 * On desktop it lives in the label column as a `.ficha-l` (keys over values, no
 * rules, sticky beside the case). Below 1024 the same rows render as a regular
 * `.ficha` (key | rule | value) inside the article, between the shots and the
 * problem, so the reading order is h3 → shots → ficha → lead as specified.
 */
function CaseFicha({ cs, className }: { cs: CaseStudy; className: string }) {
  const { lang, t } = useLanguage();
  const c = cs[lang];
  const L = t.work.labels;
  const live = cs.status !== "development";

  return (
    <dl className={className}>
      <div>
        <dt>{L.client}</dt>
        <dd>{c.client}</dd>
      </div>
      <div>
        <dt>{L.sector}</dt>
        <dd>{c.sector}</dd>
      </div>
      <div>
        <dt>{L.kind}</dt>
        <dd>{c.kind}</dd>
      </div>
      <div>
        <dt>{L.status}</dt>
        <dd>
          <span className="inline-flex items-center gap-1">
            <Glyph on={live} />
            {t.work.statusValues[cs.status]}
          </span>
        </dd>
      </div>
      <div>
        <dt>{L.stack}</dt>
        <dd>{cs.stack.join(" · ")}</dd>
      </div>
      <div>
        <dt>{L.year}</dt>
        <dd>{cs.year}</dd>
      </div>
    </dl>
  );
}

export function Work() {
  const { lang, t } = useLanguage();
  const L = t.work.labels;

  return (
    <Section id="proyectos">
      <div className="lc">
        <h2 className="sec-name">{t.work.title}</h2>
        <p className="value mt-2">
          {plural(CASE_STUDIES.length, t.work.cases)} · {t.work.countSuffix}
        </p>
      </div>
      <div className="cc pb-6">
        <p className="statement mt-6 lg:mt-0">{t.work.statement}</p>
      </div>

      {CASE_STUDIES.map((cs, i) => {
        const c = cs[lang];
        const first = i === 0;
        const hasLinks = Boolean(cs.repo || cs.demo || cs.codePrivate);

        return (
          <Fragment key={cs.slug}>
            {/* Label column (desktop only): sticky identification beside the case. */}
            <div className={`lc hidden lg:block ${first ? "lg:pt-6" : "lg:pt-24"}`}>
              <CaseFicha cs={cs} className="ficha ficha-l sticky-l" />
            </div>

            {/* Content column. The article is the padded grid cell, so the hairline lives on
                an inner wrapper: it starts after the rule→content gap and never touches the
                spine. Cases sit 64/96px apart behind it; the first case sits 24px under the
                statement like every other section. The paddings mirror the label cell's so
                the sticky ficha stays level with the h3. */}
            <article id={cs.slug} className="cc">
              <div className={first ? "pt-6" : "border-t border-line pt-16 lg:pt-24"}>
                <h3 className="h3">{c.title}</h3>

                {cs.image && (
                  <figure className="mt-4">
                    <div className="shot">
                      <Image
                        src={cs.image.src}
                        alt={c.imageAlt}
                        width={cs.image.width}
                        height={cs.image.height}
                        sizes={SHOT_SIZES}
                      />
                    </div>
                    <figcaption className="caption mt-3">{c.caption}</figcaption>
                  </figure>
                )}

                {cs.image2 && (
                  <figure className="mt-4">
                    <div className="shot">
                      <Image
                        src={cs.image2.src}
                        alt={c.image2Alt ?? c.caption2 ?? ""}
                        width={cs.image2.width}
                        height={cs.image2.height}
                        sizes={SHOT_SIZES}
                      />
                    </div>
                    {c.caption2 && <figcaption className="caption mt-3">{c.caption2}</figcaption>}
                  </figure>
                )}

                {/* Below 1024 the ficha reads here, between the shots and the problem. */}
                <CaseFicha cs={cs} className="ficha mt-8 lg:hidden" />

                <p className="lead mt-8">{c.problem}</p>

                <p className="label mt-8">{L.built}</p>
                <ul className="rows prose mt-2 list-none" role="list">
                  {c.built.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>

                <p className="label mt-8">{L.result}</p>
                <p className="result prose mt-2">{c.result}</p>

                {hasLinks && (
                  <div className="mt-6 flex flex-wrap gap-6">
                    {cs.repo && (
                      <a href={cs.repo} target="_blank" rel="noreferrer" className="link min-h-11">
                        <GithubIcon size={15} /> {L.code}
                      </a>
                    )}
                    {cs.demo && (
                      <a href={cs.demo} target="_blank" rel="noreferrer" className="link min-h-11">
                        <ArrowUpRight size={15} /> {L.demo}
                      </a>
                    )}
                    {cs.codePrivate && (
                      <span className="label inline-flex min-h-11 items-center gap-1.5">
                        <GithubIcon size={13} /> {L.privateCode}
                      </span>
                    )}
                  </div>
                )}
              </div>
            </article>
          </Fragment>
        );
      })}
    </Section>
  );
}
