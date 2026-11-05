import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { QuoteForm } from "@/components/QuoteForm";
import { Arrow, Copy, Eyebrow } from "@/components/ui";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Business Signs Market Harborough",
  description:
    "Shop fascias, lit signs, window graphics, wayfinding and hand-painted signwriting, designed, made and fitted by our team in Market Harborough.",
  alternates: { canonical: "/business-signs" },
};

type Photo = { src: string; alt: string; tall?: boolean };

const groups: {
  id: string;
  name: string;
  includes: string[];
  forWho: string;
  copy: string;
  photos: Photo[];
}[] = [
  {
    id: "exterior",
    name: "Exterior signs",
    includes: ["Shop fascias", "Totems", "Tray signs"],
    forWho: "Shops, cafes, offices and trade units that need to be seen from the road.",
    copy: "The sign over your door is often the first thing people notice. We make shop fascias, tray signs and freestanding totem signs in our own workshop, and Dave and Lee fit them. Jo draws up a mockup first, so you can see it on your building before anything is made. [materials: ask George]",
    photos: [
      {
        src: "/images/work/shop-front-riverside-cafe-market-harborough.jpg",
        alt: "Projecting sign for Riverside Cafe, Market Harborough",
      },
    ],
  },
  {
    id: "illuminated",
    name: "Illuminated signs",
    includes: ["Illuminated signs"],
    forWho: "Takeaways, pubs, surgeries and anyone open after dark.",
    copy: "A lit sign keeps you easy to find on dark evenings and right through winter. We make illuminated signs in the workshop and fit them ourselves. [type of lighting and running costs: ask George]",
    photos: [
      {
        src: "/images/work/illuminated-sign-station-road-coffee-market-harborough.jpg",
        alt: "Illuminated box sign for Station Road Coffee, Market Harborough",
      },
    ],
  },
  {
    id: "interior",
    name: "Interior and wayfinding",
    includes: ["Interior signs", "Wayfinding", "Honours boards"],
    forWho: "Schools, offices, surgeries, councils and clubs.",
    copy: "Signs inside your building that help people find their way, from the front door to reception. We also make honours boards for schools and clubs. The whole team is DBS checked, so we can work on school sites.",
    photos: [
      {
        src: "/images/work/wayfinding-signs-brook-lane-primary-school-kibworth.jpg",
        alt: "Entrance and wayfinding signs for Brook Lane Primary School, Kibworth",
      },
    ],
  },
  {
    id: "window-and-glass",
    name: "Window and glass",
    includes: ["Window graphics", "Glass manifestations"],
    forWho: "Shops showing hours and offers, offices that want some privacy, and any building with glass doors or panels.",
    copy: "Lettering, opening hours and graphics for shop windows and doors. We also make glass manifestations, the markings that stop people walking into glass doors and panels. [frosted or printed options: ask George]",
    photos: [
      {
        src: "/images/work/reception-sign-fernleigh-accountants-leicester.jpg",
        alt: "Reception sign and glass manifestations for Fernleigh Accountants, Leicester",
        tall: true,
      },
    ],
  },
  {
    id: "traditional",
    name: "Traditional and hand painted",
    includes: ["Hand-painted signwriting", "Gold leaf"],
    forWho: "Independent shops, cafes, pubs and older buildings where a traditional look fits.",
    copy: "Signwriting painted by hand with a brush, the way it has always been done. Gold leaf adds a finish that catches the light. It suits older shop fronts and traditional high streets.",
    photos: [
      {
        src: "/images/work/hand-painted-pub-sign-kettle-and-crown-desborough.jpg",
        alt: "Hand-painted pub sign for The Kettle & Crown, Desborough",
      },
    ],
  },
];

// DRAFT steps written by Claude from facts in the brief and the FAQ. Charlie to rewrite.
const steps = [
  {
    name: "Enquire",
    text: "Ring us, email, or fill in the form below. Send a photo of your building, your logo if you have one, and a rough idea of the size.",
  },
  {
    name: "Design",
    text: "Jo draws up your sign using your logo and colours. [Whether we visit to measure up: ask George]",
  },
  {
    name: "Proof",
    text: "Jo sends you a mockup of the sign on your building. Nothing gets made until you've signed it off. [How many rounds of changes are included: ask George]",
  },
  {
    name: "Make",
    text: "We make it in our own workshop in Market Harborough. [Lead time: ask George]",
  },
  {
    name: "Fit",
    text: "Dave and Lee fit it, anywhere in Leicestershire, Northamptonshire or further afield. [Out-of-hours fitting: ask George]",
  },
];

const faqs = [
  {
    q: "How long does a shop sign take?",
    a: "It depends on the size and type of sign. Once you've signed off the mockup, we make it in our workshop and fit it [lead time: ask George]. If you have an opening date, tell us when you get in touch.",
  },
  {
    q: "Do I need planning permission for my sign?",
    a: "Some signs need consent from the council, for example some illuminated signs and signs on listed buildings. [Whether we apply for it for you: ask George] If you're not sure, ask us when you get in touch.",
  },
  {
    q: "Can you use my existing logo?",
    a: "Yes. Send us your logo and Jo will use it in your mockup. If you only have a photo of it or an old print, send that and we'll talk you through it.",
  },
  {
    q: "Do you fit outside Leicestershire?",
    a: "Yes. We're based in Market Harborough and mostly work across Leicestershire and Northamptonshire, but we fit anywhere in the UK. [Travel costs outside our area: ask George]",
  },
  {
    q: "Can you work on a school site?",
    a: "Yes. The whole team is DBS checked, so we can work on site while the school is open. [Fitting in the holidays or after hours: ask George]",
  },
  {
    q: "Will I see the sign before you make it?",
    a: "Yes. Jo draws up a mockup so you can see how the sign will look, and nothing gets made until you've signed it off. [How many rounds of changes are included: ask George]",
  },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs
    .filter((f) => !f.a.includes("["))
    .map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
};

export default function BusinessSignsPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      {/* 1. Intro */}
      <section className="bg-navy text-white">
        <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 py-16 sm:px-6 sm:py-20 lg:grid-cols-[1.1fr_1fr] lg:px-8">
          <div>
            <Eyebrow tone="dark">Business signs</Eyebrow>
            <h1 className="mt-4 text-[2.4rem] leading-[1.05] font-black tracking-[-0.02em] sm:text-5xl lg:text-6xl">
              Signs for your shop, office or school, made and fitted by us.
            </h1>
            <p className="mt-6 max-w-xl text-lg text-white/90">
              Fascias, lit signs, window graphics, signs inside your building and hand-painted
              lettering. Jo designs it, we make it in our Market Harborough workshop, and Dave and Lee
              fit it.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href={site.phoneHref}
                className="inline-flex items-center justify-center rounded bg-yellow px-6 py-4 text-lg font-extrabold text-navy hover:bg-white"
              >
                Call {site.phone}
              </a>
              <a
                href="#quote"
                className="inline-flex items-center justify-center rounded border-2 border-white px-6 py-4 text-lg font-extrabold hover:bg-white hover:text-navy"
              >
                Get a quote
              </a>
            </div>
          </div>
          <nav aria-label="Sign types on this page" className="rounded-md bg-white/5 p-6">
            <p className="text-sm font-extrabold uppercase tracking-[0.12em] text-yellow">On this page</p>
            <ul className="mt-4 divide-y divide-white/10">
              {groups.map((g) => (
                <li key={g.id}>
                  <a href={`#${g.id}`} className="flex items-center justify-between py-3 text-lg font-bold hover:text-yellow">
                    {g.name}
                    <Arrow />
                  </a>
                </li>
              ))}
              <li>
                <a href="#how-it-works" className="flex items-center justify-between py-3 text-lg font-bold hover:text-yellow">
                  How a job works
                  <Arrow />
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </section>

      {/* 2. Sign types, grouped */}
      <div>
        {groups.map((g, i) => (
          <section key={g.id} id={g.id} className={`scroll-mt-24 ${i % 2 === 1 ? "bg-paper" : "bg-white"}`}>
            <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 py-16 sm:px-6 sm:py-20 lg:grid-cols-2 lg:gap-16 lg:px-8">
              <div className={i % 2 === 1 ? "lg:order-2" : ""}>
                <div
                  className={`relative overflow-hidden rounded-md bg-line ${
                    g.photos[0].tall ? "mx-auto aspect-[3/4] max-h-[560px] max-w-md" : "aspect-[4/3]"
                  }`}
                >
                  <Image
                    src={g.photos[0].src}
                    alt={g.photos[0].alt}
                    fill
                    sizes="(min-width: 1024px) 50vw, 100vw"
                    preload={i === 0}
                    loading={i === 0 ? "eager" : "lazy"}
                    className="object-cover"
                  />
                </div>
              </div>
              <div>
                <p className="text-sm font-black text-navy/40">0{i + 1}</p>
                <h2 className="mt-2 text-3xl font-black tracking-tight sm:text-4xl">{g.name}</h2>
                <ul className="mt-5 flex flex-wrap gap-2">
                  {g.includes.map((item) => (
                    <li key={item} className="rounded-full border border-navy/15 bg-white px-3 py-1 text-[15px] font-semibold">
                      {item}
                    </li>
                  ))}
                </ul>
                <p className="mt-6 text-lg leading-relaxed">
                  <Copy text={g.copy} />
                </p>
                <p className="mt-5 border-l-4 border-yellow pl-4 text-muted">
                  <span className="font-bold text-navy">Good for: </span>
                  {g.forWho}
                </p>
              </div>
            </div>
          </section>
        ))}
      </div>

      {/* 3. How a job works */}
      <section id="how-it-works" className="scroll-mt-24 bg-navy text-white">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <Eyebrow tone="dark">How a job works</Eyebrow>
          <h2 className="mt-3 max-w-2xl text-3xl font-black tracking-tight sm:text-4xl">
            From your first call to the sign going up.
          </h2>
          <ol className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-5 lg:gap-6">
            {steps.map((s, i) => (
              <li key={s.name} className="relative border-t-4 border-yellow pt-5">
                <span className="text-sm font-black text-yellow">Step {i + 1}</span>
                <h3 className="mt-1 text-2xl font-black">{s.name}</h3>
                <p className="mt-3 text-white/85 [&_mark]:bg-yellow/90">
                  <Copy text={s.text} />
                </p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* 4. FAQ */}
      <section className="mx-auto max-w-4xl px-4 py-20 sm:px-6 lg:px-8">
        <Eyebrow>Questions</Eyebrow>
        <h2 className="mt-3 text-3xl font-black tracking-tight sm:text-4xl">Things people often ask</h2>
        <div className="mt-10 divide-y divide-line border-y border-line">
          {faqs.map((f) => (
            <details key={f.q} className="group py-5">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-6 text-lg font-bold marker:hidden">
                {f.q}
                <span
                  className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-paper text-xl font-black transition-transform group-open:rotate-45"
                  aria-hidden="true"
                >
                  +
                </span>
              </summary>
              <p className="mt-3 max-w-3xl text-lg text-muted">
                <Copy text={f.a} />
              </p>
            </details>
          ))}
        </div>
        <p className="mt-8 text-lg">
          Got a different question? Ring{" "}
          <a href={site.phoneHref} className="font-bold underline decoration-yellow decoration-2 underline-offset-4">
            {site.phone}
          </a>{" "}
          or{" "}
          <Link href="/our-work" className="font-bold underline decoration-yellow decoration-2 underline-offset-4">
            see some of our work
          </Link>
          .
        </p>
      </section>

      {/* 5. Quote form */}
      <section id="quote" className="scroll-mt-24 bg-paper">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 py-20 sm:px-6 lg:grid-cols-[1fr_1.4fr] lg:px-8">
          <div>
            <Eyebrow>Get a quote</Eyebrow>
            <h2 className="mt-3 text-3xl font-black tracking-tight sm:text-4xl">Tell us about your sign</h2>
            <p className="mt-4 text-lg text-muted">
              <Copy text="Send a photo of the building and your logo if you have one. We'll get back to you within [reply time: ask George]." />
            </p>
            <p className="mt-6 text-lg">
              Rather talk it through?{" "}
              <a href={site.phoneHref} className="font-bold underline decoration-yellow decoration-2 underline-offset-4">
                Call {site.phone}
              </a>
            </p>
          </div>
          <QuoteForm source="Business signs" />
        </div>
      </section>
    </>
  );
}
