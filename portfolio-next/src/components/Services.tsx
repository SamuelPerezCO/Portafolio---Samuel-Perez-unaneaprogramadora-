"use client";

import { ArrowRight } from "lucide-react";
import { Section } from "./Section";
import { useLanguage } from "@/lib/language-context";
import { CASE_STUDIES, MORE_WORK, SERVICES, plural, type Lang, type Service } from "@/lib/content";

/** The last word and the arrow stay together, so a wrapped link never strands its arrow at the far edge. */
function withArrow(label: string) {
  const cut = label.lastIndexOf(" ");
  return (
    <span>
      {label.slice(0, cut + 1)}
      <span className="whitespace-nowrap">
        {label.slice(cut + 1)}
        <ArrowRight size={15} aria-hidden className="ml-1 inline-block align-[-2px]" />
      </span>
    </span>
  );
}

type Copy = ReturnType<typeof useLanguage>["t"];

type Proof = { source: "case"; kind: string } | { source: "repo"; kind: string } | null;

/** Resolve a service's "#slug" proof anchor against the cases first, then the repos. */
function resolveProof(service: Service, lang: Lang, t: Copy): Proof {
  const slug = service.proof.replace(/^#/, "");
  const cs = CASE_STUDIES.find((c) => c.slug === slug);
  if (cs) return { source: "case", kind: cs[lang].kind };
  const item = MORE_WORK.find((m) => m.slug === slug);
  if (item) return { source: "repo", kind: t.more.kinds[item.kind] };
  return null;
}

/* The 2×2 is drawn with hairlines only: cells 3–4 carry a top rule, cells 2 and 4
   a left rule at ≥1024. Below that, one column with a rule between every cell. */
const CELL = [
  "py-6 lg:pr-6",
  "py-6 border-t border-line lg:border-t-0 lg:border-l lg:border-line lg:pl-6",
  "py-6 border-t border-line lg:pr-6",
  "py-6 border-t border-line lg:border-l lg:border-line lg:pl-6",
];

export function Services() {
  const { lang, t } = useLanguage();

  const proofs = SERVICES.map((s) => resolveProof(s, lang, t));
  const cases = proofs.filter((p) => p?.source === "case").length;
  const repos = proofs.filter((p) => p?.source === "repo").length;

  return (
    <Section id="servicios">
      <div className="lc">
        <h2 className="sec-name">{t.services.title}</h2>
        <p className="label mt-6">{t.services.proof}</p>
        <p className="value mt-2">
          {plural(cases, t.services.cases)} · {plural(repos, t.services.repos)}
        </p>
      </div>

      <div className="cc">
        <p className="statement mt-6 lg:mt-0">{t.services.statement}</p>

        <ul className="mt-6 grid lg:grid-cols-2" role="list">
          {SERVICES.map((s, i) => {
            const proof = proofs[i];
            return (
              <li key={s.key} className={CELL[i] ?? CELL[CELL.length - 1]}>
                <h3 className="h3">{s[lang].title}</h3>
                <p className="prose mt-3">{s[lang].description}</p>
                <p className="label mt-4">{s.stack.join(" · ")}</p>
                {/* Proof row as key | value: the kind tag always sits on the line
                    under the link, at the link's x, whatever the link's width. The
                    negative margin + padding pair keeps the ≥44px hit area without
                    inflating the row. */}
                <div className="mt-4 grid grid-cols-[auto_minmax(0,1fr)] items-baseline gap-x-3">
                  <span className="label">{t.services.proof}</span>
                  <div className="flex flex-col gap-1">
                    <a className="link -my-2 min-h-11 py-2" href={s.proof}>
                      {withArrow(s[lang].proofLabel)}
                    </a>
                    {proof ? <span className="label">{proof.kind}</span> : null}
                  </div>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </Section>
  );
}
