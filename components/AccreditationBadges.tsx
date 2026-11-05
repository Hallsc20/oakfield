import { site } from "@/lib/site";

// Text badges for the three accreditations. Swap in the official BSGA and CITB
// member logos once George confirms we're allowed to use them.
export function AccreditationBadges({ tone = "light" }: { tone?: "light" | "dark" }) {
  const dark = tone === "dark";
  if (dark) {
    // Compact row for the footer.
    return (
      <ul className="flex flex-wrap items-center gap-3">
        {site.accreditations.map((a) => (
          <li key={a.short} className="flex items-center gap-2 text-sm text-white/80">
            <span className="rounded bg-white px-2 py-1 text-xs font-black text-navy">{a.short}</span>
            {a.short === "BSGA" ? "Member" : a.name}
          </li>
        ))}
      </ul>
    );
  }
  return (
    <ul className="grid gap-4 sm:grid-cols-3">
      {site.accreditations.map((a) => (
        <li
          key={a.short}
          className={`flex items-start gap-4 rounded-md border p-4 ${
            dark ? "border-white/15" : "border-line bg-white"
          }`}
        >
          <span
            className={`flex h-12 w-14 shrink-0 items-center justify-center rounded font-black tracking-tight ${
              dark ? "bg-white text-navy" : "bg-navy text-white"
            }`}
          >
            {a.short}
          </span>
          <span className={dark ? "text-white/85" : "text-muted"}>{a.line}</span>
        </li>
      ))}
    </ul>
  );
}
