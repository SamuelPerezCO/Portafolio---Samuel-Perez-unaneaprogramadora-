import type { ReactNode } from "react";

type Props = {
  id?: string;
  /** Extra classes on the outer section: "sec-hero", "sec-tight", "hero-field". */
  className?: string;
  /** Extra classes on the spine segment: "spine-draw" for the hero only. */
  spineClassName?: string;
  /** Pairs of <div className="lc"> / <div className="cc"> (or an <article className="cc">). */
  children: ReactNode;
};

/**
 * One section of the page: .sec-wrap > .shell > .spine + .sec.
 * The spine is positioned at the same x in every section and sections have no
 * margin between them, so the segments read as one continuous rule (globals.css).
 */
export function Section({ id, className = "", spineClassName = "", children }: Props) {
  return (
    <section id={id} className={`sec-wrap ${className}`.trim()}>
      <div className="shell">
        <span className={`spine ${spineClassName}`.trim()} aria-hidden="true" />
        <div className="sec">{children}</div>
      </div>
    </section>
  );
}
