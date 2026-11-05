import type { Metadata } from "next";
import Link from "next/link";
import { Eyebrow } from "@/components/ui";
import { WorkGallery } from "@/components/WorkGallery";
import { quoteHref, site } from "@/lib/site";
import { projects } from "@/lib/work";

export const metadata: Metadata = {
  title: "Our Work: Signs and Van Livery",
  description:
    "Shop signs, lit signs, school wayfinding and van livery we've made for businesses across Leicestershire and Northamptonshire. Filter by type to see more.",
  alternates: { canonical: "/our-work" },
};

export default function OurWorkPage() {
  return (
    <>
      {/* 1. Intro */}
      <section className="bg-navy text-white">
        <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 sm:py-16 lg:px-8">
          <Eyebrow tone="dark">Our work</Eyebrow>
          <h1 className="mt-4 max-w-3xl text-[2.4rem] leading-[1.05] font-black tracking-[-0.02em] sm:text-5xl lg:text-6xl">
            Signs and vans we&apos;ve made.
          </h1>
          <p className="mt-5 max-w-2xl text-lg text-white/90">
            Every job here was designed, made and fitted by us. Pick a type to see more like it, or tap a job
            to see what we did.
          </p>
        </div>
      </section>

      {/* 2. Gallery */}
      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
        <WorkGallery projects={projects} />
      </section>

      {/* 3. Call to action */}
      <section className="bg-paper">
        <div className="mx-auto flex max-w-7xl flex-col gap-6 px-4 py-16 sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:px-8">
          <div>
            <Eyebrow>Your turn</Eyebrow>
            <h2 className="mt-3 text-3xl font-black tracking-tight sm:text-4xl">Want something like this?</h2>
            <p className="mt-3 text-lg text-muted">Ring us or send a photo of your building or van.</p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row">
            <a
              href={site.phoneHref}
              className="inline-flex items-center justify-center rounded bg-yellow px-6 py-4 text-lg font-extrabold text-navy hover:bg-navy hover:text-white"
            >
              Call {site.phone}
            </a>
            <Link
              href={quoteHref}
              className="inline-flex items-center justify-center rounded border-2 border-navy px-6 py-4 text-lg font-extrabold text-navy hover:bg-navy hover:text-white"
            >
              Get a quote
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
