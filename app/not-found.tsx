import Link from "next/link";
import { site } from "@/lib/site";

export const metadata = {
  title: "Page not found",
};

export default function NotFound() {
  return (
    <section className="mx-auto max-w-3xl px-4 py-24 text-center sm:px-6 sm:py-32">
      <p className="text-sm font-extrabold uppercase tracking-[0.14em] text-navy/60">Error 404</p>
      <h1 className="mt-3 text-4xl font-black tracking-tight sm:text-5xl">We can&apos;t find that page.</h1>
      <p className="mx-auto mt-5 max-w-xl text-lg text-muted">
        It may have moved, or the link might be wrong. Head back to the homepage or give us a ring.
      </p>
      <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
        <Link href="/" className="rounded bg-navy px-6 py-4 text-lg font-extrabold text-white hover:bg-navy-deep">
          Back to the homepage
        </Link>
        <a
          href={site.phoneHref}
          className="rounded bg-yellow px-6 py-4 text-lg font-extrabold text-navy hover:brightness-95"
        >
          Call {site.phone}
        </a>
      </div>
    </section>
  );
}
