"use client";

import { Fragment, type ReactNode } from "react";
import { ArrowUpRight } from "lucide-react";
import { useLanguage } from "@/lib/language-context";
import { MORE_WORK, plural } from "@/lib/content";
import { Section } from "./Section";
import { GithubIcon } from "./icons";
import { Glyph } from "@/components/Glyph";

/**
 * Más trabajo — a ledger of repositories. One lc/cc pair per row: the label
 * column carries the kind tag and the year (only when it changes from the
 * previous row); the content column carries title, description, stack and
 * links. Rows are hairline-separated; no cards, no thumbnails, no hover fill.
 *
 * The rows are a real list (`ul > li`) so assistive tech announces "list,
 * n items"; both elements are `display: contents` so the lc/cc cells keep
 * participating in the `.sec` grid. The roles are explicit because Safari
 * drops list semantics from `display: contents` elements.
 */
export function MoreWork() {
  const { lang, t } = useLanguage();

  return (
    <Section id="mas-trabajo">
      <div className="lc">
        <h2 className="sec-name">{t.more.title}</h2>
        <p className="value mt-2">
          {plural(MORE_WORK.length, t.more.repos)} · {t.more.source}
        </p>
      </div>
      <div className="cc mt-4 pb-6 lg:mt-0">
        <p className="statement">{t.more.statement}</p>
      </div>

      <ul role="list" className="contents">
        {MORE_WORK.map((item, i) => {
          const c = item[lang];
          const showYear = i === 0 || MORE_WORK[i - 1].year !== item.year;

          return (
            <MoreWorkRow key={item.slug} slug={item.slug} showYear={showYear} year={item.year} kind={t.more.kinds[item.kind]}>
              <div className="grid gap-x-6 gap-y-3 md:grid-cols-[minmax(0,1fr)_auto]">
                <div>
                  {/* h3 in the outline (the section name is the h2); styled as the spec's h4 repo title. */}
                  <h3 className="h4">{c.title}</h3>
                  <p className="small mt-1 max-w-[46rem]">{c.description}</p>
                  <p className="label mt-3">
                    <StackLine items={item.stack} />
                  </p>
                </div>
                <div className="flex flex-wrap items-start gap-x-5 md:-mt-[9px]">
                  {item.live && (
                    <a href={item.live} target="_blank" rel="noreferrer" className="link min-h-11 items-center">
                      <ArrowUpRight size={15} /> {t.more.live}
                    </a>
                  )}
                  {item.repo && (
                    <a href={item.repo} target="_blank" rel="noreferrer" className="link min-h-11 items-center">
                      <GithubIcon size={15} /> {t.more.code}
                    </a>
                  )}
                  {item.codePrivate && (
                    <span className="label inline-flex min-h-11 items-center gap-1.5">
                      <GithubIcon size={13} /> {t.more.privateCode}
                    </span>
                  )}
                  {item.productPrivate && (
                    <span className="label inline-flex min-h-11 items-center gap-1.5">
                      <Glyph on={false} /> {t.more.privateProduct}
                    </span>
                  )}
                </div>
              </div>
            </MoreWorkRow>
          );
        })}
      </ul>
    </Section>
  );
}

/**
 * A stack line: technologies joined by " · ". Each name is one unbreakable
 * unit, so a narrow column wraps between technologies, never inside a
 * multi-word name ("AWS Rekognition", "Google Calendar API").
 */
export function StackLine({ items }: { items: string[] }) {
  return (
    <>
      {items.map((s, i) => (
        <Fragment key={s}>
          {i > 0 && " · "}
          <span className="whitespace-nowrap">{s}</span>
        </Fragment>
      ))}
    </>
  );
}

type RowProps = {
  slug: string;
  kind: string;
  year: string;
  showYear: boolean;
  children: ReactNode;
};

/**
 * One ledger row as an lc/cc pair inside a `display: contents` list item.
 * On desktop the hairline sits inside the content cell, on an inner wrapper,
 * so it starts after the cell's 33px padding and never touches the spine
 * (the label column never carries lines). Below 1024px the label cell stacks
 * above the content as a single "kind · year" line, so the hairline moves up
 * to it and the row reads as one block. The slug id and its scroll margins
 * stay on the content cell, which has a box to scroll to; the li does not.
 */
function MoreWorkRow({ slug, kind, year, showYear, children }: RowProps) {
  return (
    <li role="listitem" className="contents">
      <div className="lc flex flex-wrap items-baseline gap-x-2 border-t border-line pt-5 lg:block lg:border-t-0 lg:pt-[23px]">
        <p className="label">{kind}</p>
        {showYear && (
          <>
            <span className="label lg:hidden" aria-hidden="true">
              ·
            </span>
            <p className="value lg:mt-2">{year}</p>
          </>
        )}
      </div>
      <div id={slug} className="cc scroll-mt-20 max-lg:scroll-mt-[7.5rem]">
        <div className="border-t border-line py-5 max-lg:border-t-0 max-lg:pt-2">{children}</div>
      </div>
    </li>
  );
}
