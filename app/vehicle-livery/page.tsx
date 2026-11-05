import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { QuoteForm } from "@/components/QuoteForm";
import { Arrow, Copy, Eyebrow } from "@/components/ui";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Vehicle Livery Market Harborough",
  description:
    "Van lettering, part wraps and full wraps for cars, vans and lorries. Designed by Jo, made and fitted by our team in Market Harborough. One van or a fleet.",
  alternates: { canonical: "/vehicle-livery" },
};

// From Charlie's comparison table in the copy doc.
const options = [
  {
    name: "Cut vinyl",
    what: "Letters and logos cut out of coloured vinyl and stuck straight onto your van's paintwork.",
    looks: "Your name, number and website on the sides and back, on the van's own colour.",
    goodFor: "Sole traders, new businesses and fleets that want clear, simple lettering on every van.",
    cost: "Lowest of the three [price: ask George]",
    level: 1,
    image: "/images/work/van-lettering-hartley-builders-corby.jpg",
    alt: "Cut vinyl lettering on vans for Hartley Builders, Corby",
  },
  {
    name: "Part wrap",
    what: "Printed vinyl that covers part of the van, like the back half or the sides, with your van's own colour showing on the rest.",
    looks: "A bold block of colour or graphics across part of the van, with your details on top. It stands out more than lettering alone.",
    goodFor: "Trades who want to stand out more without wrapping the whole van.",
    cost: "In the middle [price: ask George]",
    level: 2,
    image: "/images/work/part-wrap-vans-mill-lane-plumbing-market-harborough.jpg",
    alt: "Part wrap on two vans for Mill Lane Plumbing & Heating, Market Harborough",
  },
  {
    name: "Full wrap",
    what: "Printed vinyl that covers the whole van, so it can be any colour or design you like.",
    looks: "The whole van in your colours, like a moving advert. People notice it in traffic and in car parks.",
    goodFor: "Businesses with a strong brand, and anyone who wants to change the van's colour completely.",
    cost: "Highest of the three [price: ask George]",
    level: 3,
    image: "/images/work/full-wrap-van-tidy-paws-dog-grooming-market-harborough.jpg",
    alt: "Full wrap on a grooming van for Tidy Paws Dog Grooming, Market Harborough",
  },
];

// DRAFT steps written by Claude. Charlie to rewrite.
const designSteps = [
  {
    name: "You send",
    text: "Your logo if you have one, the make and model of the van, and a couple of photos of it.",
  },
  {
    name: "Jo designs",
    text: "Jo draws your design onto a mockup of your own van, so you can see the sides, back and front.",
  },
  {
    name: "You approve",
    text: "Ask for changes until it's right. Nothing gets made until you've signed it off. [How many rounds of changes are included: ask George]",
  },
  {
    name: "We fit",
    text: "We make it in our workshop and fit it. [Where we fit vans, and how long the van is off the road: ask George]",
  },
];

// Vehicle jobs from the Our work list in the copy doc.
const vehicleWork = [
  {
    client: "Mill Lane Plumbing & Heating",
    made: "Part wrap on two vans",
    image: "/images/work/part-wrap-vans-mill-lane-plumbing-market-harborough.jpg",
    alt: "Part wrap on two vans for Mill Lane Plumbing & Heating, Market Harborough",
    href: "/our-work/mill-lane-plumbing-part-wrap",
  },
  {
    client: "Hartley Builders",
    made: "Cut vinyl lettering on five vans",
    image: "/images/work/van-lettering-hartley-builders-corby.jpg",
    alt: "Cut vinyl lettering on vans for Hartley Builders, Corby",
    href: "/our-work/hartley-builders-van-lettering",
  },
  {
    client: "Greenway Landscapes",
    made: "Part wrap on a pickup and trailer",
    image: "/images/work/part-wrap-pickup-greenway-landscapes-kettering.jpg",
    alt: "Part wrap on a pickup and trailer for Greenway Landscapes, Kettering",
    href: "/our-work/greenway-landscapes-part-wrap",
  },
  {
    client: "Rosie's Ice Cream",
    made: "Hand-lettered vintage ice cream van",
    image: "/images/work/hand-lettered-ice-cream-van-rosies-lutterworth.jpg",
    alt: "Hand-lettered vintage ice cream van for Rosie's Ice Cream, Lutterworth",
    href: "/our-work/rosies-ice-cream-van-signwriting",
    position: "object-top",
  },
];

const faqs = [
  {
    q: "Do you do cars and lorries as well as vans?",
    a: "Yes. We do livery on everything from cars and vans up to lorries.",
  },
  { q: "Will it damage my paintwork?", a: "[ask George]" },
  { q: "How long does it last?", a: "[ask George]" },
  { q: "Can you take off old graphics?", a: "[ask George]" },
];

function CostBar({ level }: { level: number }) {
  return (
    <span className="inline-flex gap-1" aria-hidden="true">
      {[1, 2, 3].map((n) => (
        <span key={n} className={`h-2.5 w-6 rounded-sm ${n <= level ? "bg-yellow" : "bg-line"}`} />
      ))}
    </span>
  );
}

export default function VehicleLiveryPage() {
  return (
    <>
      {/* 1. Intro */}
      <section className="bg-navy text-white">
        <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 py-16 sm:px-6 sm:py-20 lg:grid-cols-2 lg:px-8">
          <div>
            <Eyebrow tone="dark">Vehicle livery</Eyebrow>
            <h1 className="mt-4 text-[2.4rem] leading-[1.05] font-black tracking-[-0.02em] sm:text-5xl lg:text-6xl">
              Van lettering and wraps, from one van to a whole fleet.
            </h1>
            <p className="mt-6 max-w-xl text-lg text-white/90">
              About half of our work is vehicle livery, on everything from cars and vans up to lorries.
              Jo shows you a mockup on your own van before anything is made, and we fit it ourselves.
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
          <div className="relative aspect-[4/5] max-h-[560px] w-full overflow-hidden rounded-md lg:justify-self-end lg:max-w-md">
            <Image
              src="/images/work/hand-lettered-ice-cream-van-rosies-lutterworth.jpg"
              alt="Hand-lettered vintage ice cream van for Rosie's Ice Cream, Lutterworth"
              fill
              preload
              loading="eager"
              sizes="(min-width: 1024px) 448px, 100vw"
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* 2. Cut vinyl vs part wrap vs full wrap */}
      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <Eyebrow>Which one?</Eyebrow>
          <h2 className="mt-3 text-3xl font-black tracking-tight sm:text-4xl">
            Cut vinyl, part wrap or full wrap
          </h2>
        </div>
        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {options.map((o) => (
            <article key={o.name} className="flex flex-col overflow-hidden rounded-md border border-line bg-white">
              <div className="relative aspect-[4/3] bg-line">
                <Image src={o.image} alt={o.alt} fill sizes="(min-width: 1024px) 33vw, 100vw" className="object-cover" />
              </div>
              <div className="flex flex-1 flex-col p-6">
                <h3 className="text-2xl font-black">{o.name}</h3>
                <p className="mt-2 text-lg">{o.what}</p>
                <dl className="mt-6 flex-1 space-y-5 border-t border-line pt-5">
                  <div>
                    <dt className="text-sm font-extrabold uppercase tracking-[0.1em] text-navy/60">On your van</dt>
                    <dd className="mt-1 text-muted">{o.looks}</dd>
                  </div>
                  <div>
                    <dt className="text-sm font-extrabold uppercase tracking-[0.1em] text-navy/60">Good for</dt>
                    <dd className="mt-1 text-muted">{o.goodFor}</dd>
                  </div>
                  <div>
                    <dt className="flex items-center gap-3 text-sm font-extrabold uppercase tracking-[0.1em] text-navy/60">
                      Cost <CostBar level={o.level} />
                    </dt>
                    <dd className="mt-1 text-muted">
                      <Copy text={o.cost} />
                    </dd>
                  </div>
                </dl>
              </div>
            </article>
          ))}
        </div>
        <p className="mt-10 rounded-md bg-paper p-6 text-lg">
          <span className="font-bold">Not sure which?</span> Send us your logo and a photo of the van, and Jo
          will show you how each one would look.{" "}
          <a href="#quote" className="font-bold underline decoration-yellow decoration-2 underline-offset-4">
            Send them here
          </a>
        </p>
      </section>

      {/* 3. Fleets */}
      <section className="bg-paper">
        <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 py-20 sm:px-6 lg:grid-cols-2 lg:gap-16 lg:px-8">
          <div className="relative aspect-[4/3] overflow-hidden rounded-md bg-line lg:order-2">
            <Image
              src="/images/work/van-lettering-bridgefield-couriers-northampton.jpg"
              alt="Cut vinyl lettering on vans for Bridgefield Couriers, Northampton"
              fill
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover"
            />
          </div>
          <div>
            <Eyebrow>Fleets</Eyebrow>
            <h2 className="mt-3 text-3xl font-black tracking-tight sm:text-4xl">Every van looking the same</h2>
            <div className="mt-6 space-y-4 text-lg">
              <p>
                If you run more than a couple of vans, they should all match. Same layout, same colours, same
                sizes, so your business looks the same wherever a van is parked.
              </p>
              <p>
                We keep your design on file, so when a new van joins the fleet it gets exactly the same
                livery as the rest.
              </p>
              <p>
                <Copy text="[Fitting at your yard or around your shifts: ask George] [Prices for several vans: ask George]" />
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Design and mockups with Jo */}
      <section className="bg-navy text-white">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <Eyebrow tone="dark">Design and mockups</Eyebrow>
          <h2 className="mt-3 max-w-2xl text-3xl font-black tracking-tight sm:text-4xl">
            See it on your van before anything is made.
          </h2>
          <ol className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-4 lg:gap-6">
            {designSteps.map((s, i) => (
              <li key={s.name} className="border-t-4 border-yellow pt-5">
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

      {/* 5. Photos */}
      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <Eyebrow>Recent vehicles</Eyebrow>
            <h2 className="mt-3 text-3xl font-black tracking-tight sm:text-4xl">Vans, pickups and more</h2>
          </div>
          <Link href="/our-work" className="inline-flex items-center gap-2 font-bold text-navy">
            <span className="border-b-2 border-yellow">See all our work</span>
            <Arrow />
          </Link>
        </div>
        <div className="mt-10 grid gap-6 sm:grid-cols-2">
          {vehicleWork.map((w) => (
            <Link key={w.client} href={w.href} className="group overflow-hidden rounded-md bg-paper">
              <div className="relative aspect-[3/2] overflow-hidden">
                <Image
                  src={w.image}
                  alt={w.alt}
                  fill
                  sizes="(min-width: 640px) 50vw, 100vw"
                  className={`object-cover transition-transform duration-500 group-hover:scale-[1.03] ${"position" in w ? w.position : ""}`}
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

      {/* 6. FAQ */}
      <section className="border-t border-line">
        <div className="mx-auto max-w-4xl px-4 py-20 sm:px-6 lg:px-8">
          <Eyebrow>Questions</Eyebrow>
          <h2 className="mt-3 text-3xl font-black tracking-tight sm:text-4xl">Things people often ask</h2>
          <div className="mt-10 divide-y divide-line border-y border-line">
            {faqs.map((f) => (
              <details key={f.q} className="group py-5">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-6 text-lg font-bold">
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
        </div>
      </section>

      {/* 7. Quote form */}
      <section id="quote" className="scroll-mt-24 bg-paper">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 py-20 sm:px-6 lg:grid-cols-[1fr_1.4fr] lg:px-8">
          <div>
            <Eyebrow>Get a quote</Eyebrow>
            <h2 className="mt-3 text-3xl font-black tracking-tight sm:text-4xl">Tell us about your van</h2>
            <p className="mt-4 text-lg text-muted">
              <Copy text="Tell us the make and model, how many vehicles, and send your logo if you have one. We'll get back to you within [reply time: ask George]." />
            </p>
            <p className="mt-6 text-lg">
              Rather talk it through?{" "}
              <a href={site.phoneHref} className="font-bold underline decoration-yellow decoration-2 underline-offset-4">
                Call {site.phone}
              </a>
            </p>
          </div>
          <QuoteForm source="Vehicle livery" />
        </div>
      </section>
    </>
  );
}
