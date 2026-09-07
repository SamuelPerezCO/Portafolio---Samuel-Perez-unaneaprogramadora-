"use client";

import { ArrowUpRight } from "lucide-react";
import { useLanguage } from "@/lib/language-context";
import { MORE_WORK, MORE_WORK_GROUPS } from "@/lib/content";
import { GithubIcon } from "./icons";

export function MoreWork() {
  const { lang, t } = useLanguage();

  return (
    <section id="mas-trabajo" className="scroll-mt-20 border-t border-line">
      <div className="mx-auto max-w-[1200px] px-6 py-20 md:px-10 md:py-28">
        <div className="grid gap-6 md:grid-cols-[minmax(0,4fr)_minmax(0,8fr)] md:items-end">
          <h2 className="display-tight text-4xl font-bold text-ink md:text-5xl">{t.more.title}</h2>
          <p className="max-w-[36rem] text-lg text-ink-2 md:justify-self-end">{t.more.intro}</p>
        </div>

        <div className="mt-12 space-y-16">
          {MORE_WORK_GROUPS.map((group) => (
            <div key={group}>
              <h3 className="label border-b border-ink pb-3 text-ink">{t.more.groups[group]}</h3>
              <ul>
                {MORE_WORK.filter((item) => item.group === group).map((item) => {
                  const c = item[lang];
                  return (
                    <li
                      key={item.slug}
                      className="grid gap-3 border-b border-line py-6 md:grid-cols-[5rem_minmax(0,1fr)_auto] md:gap-8"
                    >
                      <span className="label pt-1.5">{item.year}</span>
                      <div>
                        <h4 className="font-display text-xl font-semibold text-ink">{c.title}</h4>
                        <p className="mt-1.5 max-w-[46rem] text-ink-2">{c.description}</p>
                        <p className="mt-3 font-display text-[13px] text-ink-2">{item.stack.join(" · ")}</p>
                      </div>
                      <div className="flex items-start gap-5 pt-1.5">
                        {item.live && (
                          <a href={item.live} target="_blank" rel="noreferrer" className="link text-accent">
                            <ArrowUpRight size={15} /> {t.more.live}
                          </a>
                        )}
                        {item.repo && (
                          <a href={item.repo} target="_blank" rel="noreferrer" className="link text-ink">
                            <GithubIcon size={15} /> {t.more.code}
                          </a>
                        )}
                      </div>
                    </li>
                  );
                })}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
