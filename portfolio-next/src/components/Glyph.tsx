/** 12px status disc: filled when something is live, a ring when it is pending. Always sits beside the word that says the same. */
export function Glyph({ on, className = "" }: { on: boolean; className?: string }) {
  return <span className={`glyph ${on ? "glyph-on" : "glyph-off"} ${className}`.trim()} aria-hidden="true" />;
}
