import Image from "next/image";
import Link from "next/link";
import { AccreditationBadges } from "@/components/AccreditationBadges";
import { Arrow, Eyebrow } from "@/components/ui";
import { fullAddress, quoteHref, site } from "@/lib/site";

const services = [
  {
    title: "Shop signs and fascias",
    text: "The sign over your door, designed, made and fitted by us.",
    href: "/business-signs",
  },
  {
    title: "Illuminated signs",
    text: "Signs lit from inside or behind, so people can find you after dark.",
    href: "/business-signs",
  },
  {
    title: "Window and glass graphics",
    text: "Lettering, frosting and graphics for shop windows, doors and office glass.",
    href: "/business-signs",
  },
  {
    title: "Hand-painted signwriting and gold leaf",
    text: "Lettering painted by hand, with gold leaf if you want it, for shop fronts and boards.",
    href: "/business-signs",
  },
  {
    title: "Vehicle livery and wraps",
    text: "Your name and number on a van, or a part or full wrap, on anything from cars to lorries.",
    href: "/vehicle-livery",
  },
  {
    title: "Sign manufacturing for the trade",
    text: "Send us your artwork or drawings and we'll make it and fit it anywhere in the UK.",
    href: "/sign-manufacturing",
  },
];

const featured = [
  {
    client: "Riverside Cafe",
    made: "Projecting sign",
    line: "A double-sided projecting sign, made in our workshop and fitted before the cafe opened one morning.",
    image: "/images/work/shop-front-riverside-cafe-market-harborough.jpg",
    alt: "Projecting sign for Riverside Cafe, Market Harborough",
    href: "/our-work/riverside-cafe-shop-front",
  },
  {
    client: "Mill Lane Plumbing & Heating",
    made: "Part wrap on two vans",
    line: "Name, number and logo on both vans, big enough to read from across the road.",
    image: "/images/work/part-wrap-vans-mill-lane-plumbing-market-harborough.jpg",
    alt: "Part wrap on two vans for Mill Lane Plumbing & Heating, Market Harborough",
    href: "/our-work/mill-lane-plumbing-part-wrap",
  },
  {
    client: "Brook Lane Primary School",
    made: "Entrance sign and wayfinding",
    line: "A new sign at the gate and signs around the site to help visitors find reception.",
    image: "/images/work/wayfinding-signs-brook-lane-primary-school-kibworth.jpg",
    alt: "Entrance and wayfinding signs for Brook Lane Primary School, Kibworth",
    href: "/our-work/brook-lane-primary-school-wayfinding",
  },
  {
    client: "Tidy Paws Dog Grooming",
    made: "Full wrap on a grooming van",
    line: "A full wrap in their colours, designed by Jo from a photo of the van and the logo.",
    image: "/images/work/full-wrap-van-tidy-paws-dog-grooming-market-harborough.jpg",
    alt: "Full wrap on a grooming van for Tidy Paws Dog Grooming, Market Harborough",
    href: "/our-work/tidy-paws-dog-grooming-full-wrap",
  },
  {
    client: "Station Road Coffee",
    made: "Illuminated box sign",
    line: "A lit sign over the door, so people can find the shop on dark winter mornings and evenings.",
    image: "/images/work/illuminated-sign-station-road-coffee-market-harborough.jpg",
    alt: "Illuminated box sign for Station Road Coffee, Market Harborough",
    href: "/our-work/station-road-coffee-illuminated-sign",
  },
];

const reviews = [
  {
    who: "Sam, Riverside Cafe",
    text: "Jo sent us a mockup of the new sign before anything was made, so we knew exactly what we were getting. Dave and Lee had it up before we opened, and customers were talking about it that day.",
  },
  {
    who: "Gary, Mill Lane Plumbing & Heating",
    text: "I rang about lettering for two vans and Dave answered the phone himself. Both vans match, and I've had calls from people who saw them parked up.",
  },
  {
    who: "Karen, office manager, Brook Lane Primary School",
    text: "The team were DBS checked, which made it easy to have them on site. Visitors can find reception now without ringing the office first.",
  },
  {
    who: "Priya, Tidy Paws Dog Grooming",
    text: "I sent a photo of the van and my logo, and Jo came back with a design I loved. People stop me in car parks to ask who did it.",
  },
  {
    who: "Helen, owner, Station Road Coffee",
    text: "People used to walk straight past us on dark winter mornings. The lit sign has fixed that, and Lee left the front of the shop tidier than he found it.",
  },
];

const clients = [
  "Riverside Cafe",
  "Mill Lane Plumbing & Heating",
  "Brook Lane Primary School",
  "Tidy Paws Dog Grooming",
  "Station Road Coffee",
  "Hartley Builders",
  "The Kettle & Crown",
  "Greenway Landscapes",
  "Fernleigh Accountants",
  "Sutton Brook Parish Council",
  "Bridgefield Couriers",
  "Rosie's Ice Cream",
];

export default function Home() {
  const [lead, ...rest] = featured;

  return (
    <>
      {/* 1. Hero: one image, one line, two buttons */}
      <section className="relative isolate overflow-hidden bg-navy text-white">
        <Image
          src="/images/work/van-lettering-bridgefield-couriers-northampton.jpg"
          alt="Cut vinyl lettering on vans for Bridgefield Couriers, Northampton"
          fill
          preload
          loading="eager"
          sizes="100vw"
          className="-z-10 object-cover object-[70%_center]"
        />
        <div className="absolute inset-0 -z-10 bg-navy/80 sm:bg-navy/70" aria-hidden="true" />
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 sm:py-28 lg:px-8 lg:py-36">
          <div className="max-w-3xl">
            <h1 className="text-[2.6rem] leading-[1.02] font-black tracking-[-0.02em] sm:text-6xl lg:text-7xl">
              Signs and van livery, made in Market Harborough.
            </h1>
            <p className="mt-6 max-w-2xl text-lg text-white/90 sm:text-xl">
              We design, make and fit it all ourselves: shop signs, lit signs, window graphics and
              livery for anything from cars to lorries.
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <a
                href={site.phoneHref}
                className="inline-flex items-center justify-center rounded bg-yellow px-6 py-4 text-lg font-extrabold text-navy transition-colors hover:bg-white"
              >
                Call {site.phone}
              </a>
              <Link
                href={quoteHref}
                className="inline-flex items-center justify-center rounded border-2 border-white px-6 py-4 text-lg font-extrabold text-white transition-colors hover:bg-white hover:text-navy"
              >
                Get a quote
              </Link>
            </div>
            <ul className="mt-10 flex flex-wrap gap-x-6 gap-y-2 text-[15px] font-semibold text-white/85">
              <li>20 years trading</li>
              <li>BSGA members</li>
              <li>CITB registered</li>
              <li>DBS checked</li>
            </ul>
          </div>
        </div>
      </section>

      {/* 2. Six service tiles */}
      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <Eyebrow>What we make</Eyebrow>
          <h2 className="mt-3 text-3xl font-black tracking-tight sm:text-4xl">
            Everything is drawn, made and fitted by the same three people.
          </h2>
        </div>
        <ul className="mt-12 grid gap-px overflow-hidden rounded-md border border-line bg-line sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s, i) => (
            <li key={s.title} className="bg-white">
              <Link
                href={s.href}
                className="group flex h-full flex-col p-7 transition-colors hover:bg-paper"
              >
                <span className="text-sm font-black text-navy/40">0{i + 1}</span>
                <h3 className="mt-3 text-xl font-extrabold leading-snug">{s.title}</h3>
                <p className="mt-2 flex-1 text-muted">{s.text}</p>
                <span className="mt-5 inline-flex items-center gap-2 font-bold text-navy">
                  <span className="border-b-2 border-yellow">Find out more</span>
                  <span className="transition-transform group-hover:translate-x-1">
                    <Arrow />
                  </span>
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </section>

      {/* 3. Featured work */}
      <section className="bg-paper py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <Eyebrow>Recent work</Eyebrow>
              <h2 className="mt-3 text-3xl font-black tracking-tight sm:text-4xl">Some jobs from the workshop</h2>
            </div>
            <Link href="/our-work" className="inline-flex items-center gap-2 font-bold text-navy">
              <span className="border-b-2 border-yellow">See all our work</span>
              <Arrow />
            </Link>
          </div>

          <div className="mt-10 grid gap-6 lg:grid-cols-2">
            {[lead, ...rest].map((w, i) => (
              <Link
                key={w.client}
                href={w.href}
                className={`group overflow-hidden rounded-md bg-white ${i === 0 ? "lg:col-span-2" : ""}`}
              >
                <div className={`relative overflow-hidden ${i === 0 ? "aspect-[16/9] lg:aspect-[21/9]" : "aspect-[4/3]"}`}>
                  <Image
                    src={w.image}
                    alt={w.alt}
                    fill
                    sizes={i === 0 ? "(min-width: 1280px) 1216px, 100vw" : "(min-width: 1024px) 50vw, 100vw"}
                    className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                  />
                </div>
                <div className="p-6">
                  <p className="text-sm font-bold uppercase tracking-[0.1em] text-navy/60">{w.made}</p>
                  <h3 className="mt-1 text-2xl font-extrabold">{w.client}</h3>
                  <p className="mt-2 text-muted">{w.line}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Reviews */}
      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="flex flex-wrap items-center gap-3">
          <Eyebrow>What customers say</Eyebrow>
          <span className="rounded-full border border-line px-3 py-1 text-xs font-bold uppercase tracking-wide text-muted">
            Sample reviews
          </span>
        </div>
        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {reviews.map((r, i) => (
            <figure
              key={r.who}
              className={`flex flex-col rounded-md border-l-4 border-yellow bg-paper p-7 ${
                i === 0 ? "lg:col-span-2" : ""
              }`}
            >
              <blockquote className={`flex-1 ${i === 0 ? "text-xl leading-relaxed font-semibold" : "text-lg"}`}>
                “{r.text}”
              </blockquote>
              <figcaption className="mt-5 font-bold text-navy">{r.who}</figcaption>
            </figure>
          ))}
        </div>
      </section>

      {/* 5. Client names + 6. Accreditations */}
      <section className="border-y border-line bg-white py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-center text-sm font-extrabold uppercase tracking-[0.14em] text-navy/60">
            Some of the businesses we&apos;ve worked for
          </h2>
          <ul className="mt-8 flex flex-wrap justify-center gap-x-8 gap-y-4">
            {clients.map((c) => (
              <li key={c} className="text-lg font-black tracking-tight text-navy/45">
                {c}
              </li>
            ))}
          </ul>
          <div className="mt-14">
            <AccreditationBadges />
          </div>
        </div>
      </section>

      {/* 7. Contact block with map */}
      <section className="bg-navy text-white">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 py-20 sm:px-6 lg:grid-cols-2 lg:px-8">
          <div>
            <h2 className="text-3xl font-black tracking-tight sm:text-4xl">Want a price for a sign or a van?</h2>
            <p className="mt-4 max-w-lg text-lg text-white/85">
              Ring us or send an email. Tell us what you need, and send a photo of the building or van
              if you have one.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
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
            <dl className="mt-10 grid gap-6 sm:grid-cols-2">
              <div>
                <dt className="text-sm font-extrabold uppercase tracking-[0.12em] text-yellow">Email</dt>
                <dd className="mt-1">
                  <a href={`mailto:${site.email}`} className="hover:text-yellow">
                    {site.email}
                  </a>
                </dd>
              </div>
              <div>
                <dt className="text-sm font-extrabold uppercase tracking-[0.12em] text-yellow">Opening hours</dt>
                <dd className="mt-1">{site.hours}</dd>
              </div>
              <div className="sm:col-span-2">
                <dt className="text-sm font-extrabold uppercase tracking-[0.12em] text-yellow">Workshop</dt>
                <dd className="mt-1">{fullAddress}</dd>
              </div>
            </dl>
          </div>
          <div className="overflow-hidden rounded-md bg-white/5">
            <iframe
              title="Map of Market Harborough, where our workshop is"
              src="https://www.openstreetmap.org/export/embed.html?bbox=-0.965%2C52.462%2C-0.875%2C52.495&layer=mapnik&marker=52.4776%2C-0.9209"
              className="h-80 w-full border-0 lg:h-full lg:min-h-[420px]"
              loading="lazy"
            />
          </div>
        </div>
      </section>
    </>
  );
}
