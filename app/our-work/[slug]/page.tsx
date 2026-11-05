import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Arrow } from "@/components/ui";
import { quoteHref, site } from "@/lib/site";
import { getProject, projectDescription, projectTitle, projects } from "@/lib/work";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const p = getProject(slug);
  if (!p) return {};
  return {
    title: projectTitle(p),
    description: projectDescription(p),
    alternates: { canonical: `/our-work/${p.slug}` },
    openGraph: { images: [p.image] },
  };
}

export default async function ProjectPage({ params }: Props) {
  const { slug } = await params;
  const p = getProject(slug);
  if (!p) notFound();

  const index = projects.findIndex((x) => x.slug === p.slug);
  const next = projects[(index + 1) % projects.length];
  const sameType = projects.filter((x) => x.type === p.type && x.slug !== p.slug);
  const others = projects.filter((x) => x.type !== p.type && x.slug !== p.slug);
  const related = [...sameType, ...others].slice(0, 3);
  const allSameType = sameType.length >= 3;
  const serviceLink =
    p.type === "Vehicles"
      ? { href: "/vehicle-livery", label: "More about vehicle livery" }
      : { href: "/business-signs", label: "More about business signs" };

  return (
    <>
      <article>
        {/* Breadcrumb + heading */}
        <div className="bg-navy text-white">
          <div className="mx-auto max-w-7xl px-4 pt-8 pb-10 sm:px-6 lg:px-8">
            <nav aria-label="Breadcrumb" className="text-[15px] text-white/70">
              <Link href="/our-work" className="font-semibold hover:text-yellow">
                Our work
              </Link>
              <span className="mx-2" aria-hidden="true">
                /
              </span>
              <span>{p.client}</span>
            </nav>
            <h1 className="mt-5 text-[2.2rem] leading-[1.05] font-black tracking-[-0.02em] sm:text-5xl">{p.client}</h1>
            <p className="mt-3 text-xl font-semibold text-yellow">{p.made}</p>
          </div>
        </div>

        {/* Big photo, full width */}
        <div className="bg-navy">
          <div className="mx-auto max-w-7xl px-4 pb-0 sm:px-6 lg:px-8">
            <div className="relative aspect-[4/3] overflow-hidden rounded-t-md sm:aspect-[16/9] lg:aspect-[21/9]">
              <Image
                src={p.image}
                alt={p.alt}
                fill
                preload
                loading="eager"
                sizes="(min-width: 1280px) 1216px, 100vw"
                className={`object-cover ${p.imagePosition ?? ""}`}
              />
            </div>
          </div>
        </div>

        {/* Details */}
        <div className="mx-auto grid max-w-7xl gap-10 px-4 py-12 sm:px-6 lg:grid-cols-[1.6fr_1fr] lg:px-8">
          <div>
            <p className="text-2xl leading-relaxed font-semibold">{p.line}</p>
            <Link href={serviceLink.href} className="mt-8 inline-flex items-center gap-2 text-lg font-bold">
              <span className="border-b-2 border-yellow">{serviceLink.label}</span>
              <Arrow />
            </Link>
          </div>
          <dl className="grid content-start gap-5 rounded-md bg-paper p-6">
            <div>
              <dt className="text-sm font-extrabold uppercase tracking-[0.12em] text-navy/60">Client</dt>
              <dd className="mt-1 text-lg font-bold">{p.client}</dd>
            </div>
            <div>
              <dt className="text-sm font-extrabold uppercase tracking-[0.12em] text-navy/60">Where</dt>
              <dd className="mt-1 text-lg font-bold">{p.town}</dd>
            </div>
            <div>
              <dt className="text-sm font-extrabold uppercase tracking-[0.12em] text-navy/60">What we made</dt>
              <dd className="mt-1 text-lg font-bold">{p.made}</dd>
            </div>
            <div>
              <dt className="text-sm font-extrabold uppercase tracking-[0.12em] text-navy/60">Type</dt>
              <dd className="mt-1 text-lg font-bold">{p.type}</dd>
            </div>
          </dl>
        </div>
      </article>

      {/* Call to action */}
      <section className="bg-navy text-white">
        <div className="mx-auto flex max-w-7xl flex-col gap-6 px-4 py-14 sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:px-8">
          <h2 className="text-3xl font-black tracking-tight sm:text-4xl">Want something like this?</h2>
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

      {/* More like this */}
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <h2 className="text-2xl font-black tracking-tight sm:text-3xl">
            {allSameType ? `More ${p.type.toLowerCase()}` : "More of our work"}
          </h2>
          <Link href={`/our-work/${next.slug}`} className="inline-flex items-center gap-2 font-bold">
            <span className="border-b-2 border-yellow">Next job: {next.client}</span>
            <Arrow />
          </Link>
        </div>
        <ul className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {related.map((r) => (
            <li key={r.slug}>
              <Link href={`/our-work/${r.slug}`} className="group block overflow-hidden rounded-md bg-paper">
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={r.image}
                    alt={r.alt}
                    fill
                    sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                    className={`object-cover transition-transform duration-500 group-hover:scale-[1.03] ${r.imagePosition ?? ""}`}
                  />
                </div>
                <div className="p-5">
                  <h3 className="text-lg font-extrabold">{r.client}</h3>
                  <p className="mt-1 text-[15px] font-semibold text-navy/60">{r.made}</p>
                </div>
              </Link>
            </li>
          ))}
        </ul>
        <Link href="/our-work" className="mt-10 inline-flex items-center gap-2 text-lg font-bold">
          <span className="border-b-2 border-yellow">Back to all our work</span>
          <Arrow />
        </Link>
      </section>
    </>
  );
}
