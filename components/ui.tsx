import { Fragment } from "react";

export function Eyebrow({ children, tone = "light" }: { children: React.ReactNode; tone?: "light" | "dark" }) {
  return (
    <p
      className={`text-sm font-extrabold uppercase tracking-[0.14em] ${
        tone === "dark" ? "text-white/70" : "text-navy/60"
      }`}
    >
      <span className="mr-2 inline-block h-2.5 w-2.5 bg-yellow align-middle" aria-hidden="true" />
      {children}
    </p>
  );
}

export function Arrow() {
  return (
    <svg viewBox="0 0 20 20" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d="M4 10h11M11 5l5 5-5 5" />
    </svg>
  );
}

// Shows copy with any [square bracket notes] highlighted, so facts still waiting
// on George are easy to spot in the preview. Remove the brackets in the copy once answered.
export function Copy({ text }: { text: string }) {
  const parts = text.split(/(\[[^\]]+\])/g);
  return (
    <>
      {parts.map((part, i) =>
        part.startsWith("[") && part.endsWith("]") ? (
          <mark key={i} className="rounded bg-yellow/30 px-1 text-[0.9em] text-navy">
            {part}
          </mark>
        ) : (
          <Fragment key={i}>{part}</Fragment>
        ),
      )}
    </>
  );
}
