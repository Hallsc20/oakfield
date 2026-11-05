import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { AccreditationBadges } from "@/components/AccreditationBadges";
import { Copy, Eyebrow } from "@/components/ui";
import { quoteHref, site } from "@/lib/site";

export const metadata: Metadata = {
  title: "About Us: Sign Makers in Market Harborough",
  description:
    "Meet Dave, Jo and Lee. Three people, one workshop on the edge of Market Harborough and 20 years of designing, making and fitting signs and van livery.",
  alternates: { canonical: "/about" },
};

// Team lines are Charlie's, from the copy doc.
const team = [
  {
    name: "Dave",
    role: "Runs the workshop, makes and fits",
    text: "Dave runs Oakfield Signs and does most of the making and fitting himself. If you ring the workshop, there's a good chance he'll answer.",
  },
  {
    name: "Jo",
    role: "Design and mockups",
    text: "Jo does the design. She turns your logo and ideas into a mockup, so you can see your sign or van before anything gets made.",
  },
  {
    name: "Lee",
    role: "Fitting and installs",
    text: "Lee fits and installs, on buildings and on vehicles. He's usually the one up the ladder making sure everything is straight.",
  },
];

// DRAFT reasons written by Claude from facts in the brief. Charlie to rewrite.
const reasons = [
  {
    title: "You talk to the people doing the work",
    text: "There's no sales team. When you ring, you speak to Dave, Jo or Lee.",
  },
  {
    title: "What you sign off is what gets made",
    text: "Jo's mockup goes straight to the workshop, so nothing changes between the drawing and the finished sign.",
  },
  {
    title: "Nothing gets passed on",
    text: "We design, make and fit it all ourselves. Your job never gets handed to another firm halfway through.",
  },
  {
    title: "One team to call",
    text: "If something needs looking at after it's fitted, you know exactly who to ring.",
  },
];

export default function AboutPage() {
  return (
    <>
      {/* 1. Intro */}
      <section className="bg-navy text-white">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
          <Eyebrow tone="dark">About us</Eyebrow>
          <h1 className="mt-4 max-w-4xl text-[2.4rem] leading-[1.05] font-black tracking-[-0.02em] sm:text-5xl lg:text-6xl">
            Three people, one workshop, 20 years of signs.
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-white/90">
            Oakfield Signs &amp; Graphics has been trading for 20 years. We work from a unit on a small trading
            estate on the edge of Market Harborough, and we design, make and fit everything ourselves, from
            shop fascias to full van wraps.
          </p>
          <dl className="mt-10 grid max-w-3xl grid-cols-3 gap-4 border-t border-white/15 pt-8">
            <div>
              <dt className="text-sm font-bold text-white/70">Trading</dt>
              <dd className="mt-1 text-2xl font-black text-yellow sm:text-4xl">20 years</dd>
            </div>
            <div>
              <dt className="text-sm font-bold text-white/70">Team</dt>
              <dd className="mt-1 text-2xl font-black text-yellow sm:text-4xl">3 people</dd>
            </div>
            <div>
              <dt className="text-sm font-bold text-white/70">Workshop</dt>
              <dd className="mt-1 text-2xl font-black text-yellow sm:text-4xl">1</dd>
            </div>
          </dl>
        </div>
      </section>

      {/* 2. The team */}
      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <Eyebrow>The team</Eyebrow>
        <h2 className="mt-3 text-3xl font-black tracking-tight sm:text-4xl">Dave, Jo and Lee</h2>
        <ul className="mt-10 grid gap-6 md:grid-cols-3">
          {team.map((t) => (
            <li key={t.name} className="overflow-hidden rounded-md border border-line">
              {/* Placeholder until real team photos arrive */}
              <div className="flex aspect-[4/3] items-center justify-center bg-navy">
                <span className="flex h-24 w-24 items-center justify-center rounded-full bg-yellow text-5xl font-black text-navy">
                  {t.name[0]}
                </span>
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-black">{t.name}</h3>
                <p className="mt-1 text-sm font-extrabold uppercase tracking-[0.1em] text-navy/60">{t.role}</p>
                <p className="mt-4 text-lg text-muted">{t.text}</p>
              </div>
            </li>
          ))}
        </ul>
      </section>

      {/* 3. The workshop */}
      <section className="bg-paper">
        <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 py-20 sm:px-6 lg:grid-cols-2 lg:gap-16 lg:px-8">
          <div className="relative aspect-[4/3] overflow-hidden rounded-md bg-line">
            <Image
              src="/images/sign-workshop-market-harborough.jpg"
              alt="Inside a small sign workshop with workbenches, tools and materials"
              fill
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover"
            />
          </div>
          <div>
            <Eyebrow>The workshop</Eyebrow>
            <h2 className="mt-3 text-3xl font-black tracking-tight sm:text-4xl">Unit 7, Riverside Trading Estate</h2>
            <div className="mt-6 space-y-4 text-lg">
              <p>
                Everything starts here. Jo draws up your design, Dave makes the signs and vehicle graphics, and then
                he and Lee load up the van and go out to fit them.
              </p>
              <p>
                <Copy text="[What's in the workshop, e.g. the machines and the paint shop: ask George]" />
              </p>
              <p className="text-muted">
                {site.address.line1}, {site.address.town}, {site.address.postcode}. {site.hours}.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Why in house matters */}
      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <Eyebrow>Why it matters</Eyebrow>
        <h2 className="mt-3 max-w-2xl text-3xl font-black tracking-tight sm:text-4xl">
          Why we do it all ourselves
        </h2>
        <div className="mt-10 grid gap-x-10 gap-y-8 md:grid-cols-2">
          {reasons.map((r, i) => (
            <div key={r.title} className="flex gap-5">
              <span className="text-3xl font-black text-yellow">{i + 1}</span>
              <div>
                <h3 className="text-xl font-extrabold">{r.title}</h3>
                <p className="mt-2 text-lg text-muted">{r.text}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 5. Accreditations */}
      <section className="border-y border-line bg-white">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <Eyebrow>Accredited and checked</Eyebrow>
          <h2 className="mt-3 text-3xl font-black tracking-tight sm:text-4xl">BSGA, CITB and DBS</h2>
          <div className="mt-8">
            <AccreditationBadges />
          </div>
        </div>
      </section>

      {/* 6. Call to action */}
      <section className="bg-navy text-white">
        <div className="mx-auto flex max-w-7xl flex-col gap-6 px-4 py-16 sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:px-8">
          <div>
            <h2 className="text-3xl font-black tracking-tight sm:text-4xl">Got a sign or a van that needs doing?</h2>
            <p className="mt-3 text-lg text-white/85">Ring the workshop, or send us a photo and we&apos;ll take a look.</p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row">
            <a
              href={site.phoneHref}
              className="inline-flex items-center justify-center rounded bg-yellow px-6 py-4 text-lg font-extrabold text-navy hover:bg-white"
            >
              Call {site.phone}
            </a>
            <Link
              href={quoteHref}
              className="inline-flex items-center justify-center rounded border-2 border-white px-6 py-4 text-lg font-extrabold hover:bg-white hover:text-navy"
            >
              Get a quote
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
