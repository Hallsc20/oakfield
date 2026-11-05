import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { QuoteForm } from "@/components/QuoteForm";
import { Copy, Eyebrow } from "@/components/ui";
import { site } from "@/lib/site";

// DRAFT page. All copy written by Claude from facts in the brief. Charlie to rewrite;
// materials and processes are waiting on George.

export const metadata: Metadata = {
  title: "Sign Manufacturing Market Harborough",
  description:
    "Signs made to your drawings in our Market Harborough workshop and fitted anywhere in the UK. For designers, agencies and the trade. Send your artwork.",
  alternates: { canonical: "/sign-manufacturing" },
};

// Everything the brief says the workshop makes.
const products = [
  "Shop fascias",
  "Illuminated signs",
  "Totems and tray signs",
  "Window graphics",
  "Glass manifestations",
  "Interior and wayfinding signs",
  "Honours boards",
  "Hand-painted signwriting and gold leaf",
  "Banners and pop-up displays",
  "Vehicle livery and wraps",
];

const reasons = [
  {
    title: "One workshop, start to finish",
    text: "We make and fit everything ourselves. Your job isn't passed on to another firm halfway through.",
  },
  {
    title: "You deal with the people doing the work",
    text: "There are three of us: Dave runs the workshop and makes and fits, Jo does the design work, and Lee installs. Ring us and you'll speak to one of them.",
  },
  {
    title: "Fitted by the people who made it",
    text: "We fit what we make, so there's no handover to a separate installer. [What file formats we need for artwork: ask George]",
  },
];

const examples = [
  {
    client: "Fernleigh Accountants",
    made: "Reception sign and glass manifestations",
    image: "/images/work/reception-sign-fernleigh-accountants-leicester.jpg",
    alt: "Reception sign and glass manifestations for Fernleigh Accountants, Leicester",
    href: "/our-work/fernleigh-accountants-reception-sign",
    position: "object-top",
  },
  {
    client: "Brook Lane Primary School",
    made: "Entrance sign and wayfinding",
    image: "/images/work/wayfinding-signs-brook-lane-primary-school-kibworth.jpg",
    alt: "Entrance and wayfinding signs for Brook Lane Primary School, Kibworth",
    href: "/our-work/brook-lane-primary-school-wayfinding",
    position: "object-center",
  },
  {
    client: "Sutton Brook Parish Council",
    made: "Footpath and bridleway fingerposts",
    image: "/images/work/fingerpost-signs-sutton-brook.jpg",
    alt: "Wooden fingerpost signs for Sutton Brook Parish Council",
    href: "/our-work/sutton-brook-parish-council-fingerposts",
    position: "object-center",
  },
];

export default function SignManufacturingPage() {
  return (
    <>
      {/* 1. Intro */}
      <section className="bg-navy text-white">
        <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 py-16 sm:px-6 sm:py-20 lg:grid-cols-2 lg:px-8">
          <div>
            <Eyebrow tone="dark">Sign manufacturing</Eyebrow>
            <h1 className="mt-4 text-[2.4rem] leading-[1.05] font-black tracking-[-0.02em] sm:text-5xl lg:text-6xl">
              Signs made to your drawings, fitted anywhere in the UK.
            </h1>
            <p className="mt-6 max-w-xl text-lg text-white/90">
              For designers, agencies and trade customers. Send us your artwork or drawings, and we&apos;ll
              make the signs in our Market Harborough workshop and fit them for you.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href="#quote"
                className="inline-flex items-center justify-center rounded bg-yellow px-6 py-4 text-lg font-extrabold text-navy hover:bg-white"
              >
                Send your drawings
              </a>
              <a
                href={site.phoneHref}
                className="inline-flex items-center justify-center rounded border-2 border-white px-6 py-4 text-lg font-extrabold hover:bg-white hover:text-navy"
              >
                Call {site.phone}
              </a>
            </div>
          </div>
          <div className="relative aspect-[4/3] overflow-hidden rounded-md">
            <Image
              src="/images/work/illuminated-sign-station-road-coffee-market-harborough.jpg"
              alt="Illuminated box sign for Station Road Coffee, Market Harborough"
              fill
              preload
              loading="eager"
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* 2. What we make + materials and processes */}
      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <Eyebrow>What we can make</Eyebrow>
            <h2 className="mt-3 text-3xl font-black tracking-tight sm:text-4xl">Made in our own workshop</h2>
            <ul className="mt-8 grid gap-x-6 sm:grid-cols-2">
              {products.map((p) => (
                <li key={p} className="flex items-center gap-3 border-b border-line py-3 text-lg font-semibold">
                  <span className="h-2.5 w-2.5 shrink-0 bg-yellow" aria-hidden="true" />
                  {p}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <Eyebrow>Materials and processes</Eyebrow>
            <h2 className="mt-3 text-3xl font-black tracking-tight sm:text-4xl">How we make it</h2>
            <div className="mt-8 rounded-md border-2 border-dashed border-navy/20 p-6 text-lg text-muted">
              <Copy text="[Materials and processes the workshop uses, with a line on what each is for: ask George]" />
            </div>
          </div>
        </div>
      </section>

      {/* 3. Why in house */}
      <section className="bg-paper">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <Eyebrow>Made in house</Eyebrow>
          <h2 className="mt-3 max-w-2xl text-3xl font-black tracking-tight sm:text-4xl">
            Why trade customers use us
          </h2>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {reasons.map((r) => (
              <div key={r.title} className="rounded-md border-t-4 border-yellow bg-white p-6">
                <h3 className="text-xl font-extrabold">{r.title}</h3>
                <p className="mt-3 text-muted">
                  <Copy text={r.text} />
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. UK-wide installation */}
      <section className="bg-navy text-white">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 py-20 sm:px-6 lg:grid-cols-[1.2fr_1fr] lg:px-8">
          <div>
            <Eyebrow tone="dark">Installation</Eyebrow>
            <h2 className="mt-3 text-3xl font-black tracking-tight sm:text-4xl">We fit anywhere in the UK</h2>
            <p className="mt-5 max-w-xl text-lg text-white/85 [&_mark]:bg-yellow/90">
              <Copy text="Most of our work is in Leicestershire and Northamptonshire, but we'll travel to fit your signs wherever they're going. [Whether we fit unbranded for agencies: ask George]" />
            </p>
          </div>
          <ul className="grid content-start gap-3">
            {site.accreditations.map((a) => (
              <li key={a.short} className="flex items-start gap-4 rounded-md bg-white/5 p-4">
                <span className="flex h-10 w-12 shrink-0 items-center justify-center rounded bg-white text-sm font-black text-navy">
                  {a.short}
                </span>
                <span className="text-white/85">{a.line}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* 5. Examples */}
      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <Eyebrow>Examples</Eyebrow>
        <h2 className="mt-3 text-3xl font-black tracking-tight sm:text-4xl">Some of what we&apos;ve made</h2>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {examples.map((w) => (
            <Link key={w.client} href={w.href} className="group overflow-hidden rounded-md bg-paper">
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src={w.image}
                  alt={w.alt}
                  fill
                  sizes="(min-width: 768px) 33vw, 100vw"
                  className={`object-cover transition-transform duration-500 group-hover:scale-[1.03] ${w.position}`}
                />
              </div>
              <div className="p-5">
                <p className="text-sm font-bold uppercase tracking-[0.1em] text-navy/60">{w.made}</p>
                <h3 className="mt-1 text-xl font-extrabold">{w.client}</h3>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* 6. Call to action + form */}
      <section id="quote" className="scroll-mt-24 bg-paper">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 py-20 sm:px-6 lg:grid-cols-[1fr_1.4fr] lg:px-8">
          <div>
            <Eyebrow>Get a price</Eyebrow>
            <h2 className="mt-3 text-3xl font-black tracking-tight sm:text-4xl">Send us your drawings</h2>
            <p className="mt-4 text-lg text-muted">
              <Copy text="Attach your artwork or drawings and tell us quantities, sizes and where it's being fitted. We'll get back to you within [reply time: ask George]." />
            </p>
            <p className="mt-6 text-lg">
              Rather talk it through?{" "}
              <a href={site.phoneHref} className="font-bold underline decoration-yellow decoration-2 underline-offset-4">
                Call {site.phone}
              </a>
            </p>
          </div>
          <QuoteForm source="Sign manufacturing" />
        </div>
      </section>
    </>
  );
}
