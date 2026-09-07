"use client";

import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { useLanguage } from "@/lib/language-context";
import { CASE_STUDIES } from "@/lib/content";
import { GithubIcon } from "./icons";

export function Work() {
  const { lang, t } = useLanguage();
  const L = t.work.labels;

  return (
    <section id="proyectos" className="scroll-mt-20 border-t border-line">
      <div className="mx-auto max-w-[1200px] px-6 py-20 md:px-10 md:py-28">
        <div className="grid gap-6 md:grid-cols-[minmax(0,4fr)_minmax(0,8fr)] md:items-end">
          <h2 className="display-tight text-4xl font-bold text-ink md:text-5xl">{t.work.title}</h2>
          <p className="max-w-[36rem] text-lg text-ink-2 md:justify-self-end">{t.work.intro}</p>
        </div>

        <div className="mt-14 space-y-24 md:mt-20 md:space-y-32">
          {CASE_STUDIES.map((cs) => {
            const c = cs[lang];
            return (
              <article key={cs.slug} id={cs.slug} className="scroll-mt-24">
                <header className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-2 border-t border-ink pt-4">
                  <p className="label text-ink">{c.kicker}</p>
                  <p className="label">{cs.year}</p>
                </header>

                <h3 className="display-tight mt-4 max-w-[22ch] text-3xl font-semibold leading-[1.05] text-ink md:text-[2.75rem]">
                  {c.title}
                </h3>

                {cs.image && (
                  <figure className="mt-8 md:mt-10">
                    <div className="shot">
                      <Image
                        src={cs.image.src}
                        alt={c.imageAlt}
                        width={cs.image.width}
                        height={cs.image.height}
                        sizes="(min-width: 1280px) 1120px, 100vw"
                      />
                    </div>
                    <figcaption className="mt-3 text-sm italic text-ink-2">{c.caption}</figcaption>
                  </figure>
                )}

                <div className="mt-10 grid gap-10 md:grid-cols-[minmax(0,4fr)_minmax(0,8fr)] md:gap-16">
                  <dl className="ficha self-start">
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
                      <dt>{L.stack}</dt>
                      <dd>{cs.stack.join(" · ")}</dd>
                    </div>
                  </dl>

                  <div className="max-w-[40rem]">
                    <p className="text-[1.15rem] leading-relaxed text-ink">{c.problem}</p>

                    <p className="label mt-9">{L.built}</p>
                    <ul className="mt-3 space-y-3">
                      {c.built.map((item) => (
                        <li key={item} className="flex gap-3">
                          <span aria-hidden className="mt-[0.72em] h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>

                    <p className="label mt-9">{L.result}</p>
                    <p className="mt-3 font-semibold text-ink">{c.result}</p>

                    {(cs.repo || cs.demo) && (
                      <div className="mt-8 flex flex-wrap gap-6">
                        {cs.repo && (
                          <a href={cs.repo} target="_blank" rel="noreferrer" className="link text-ink">
                            <GithubIcon size={15} /> {L.code}
                          </a>
                        )}
                        {cs.demo && (
                          <a href={cs.demo} target="_blank" rel="noreferrer" className="link text-ink">
                            <ArrowUpRight size={15} /> {L.demo}
                          </a>
                        )}
                      </div>
                    )}
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
