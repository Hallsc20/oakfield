import type { Metadata } from "next";
import { QuoteForm } from "@/components/QuoteForm";
import { Copy, Eyebrow } from "@/components/ui";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact Oakfield Signs, Market Harborough",
  description:
    "Ring 01858 000 000, email us or send a photo for a quote. Unit 7, Riverside Trading Estate, Market Harborough, LE16 7XX. Open Mon to Fri, 8.30am to 5pm.",
  alternates: { canonical: "/contact" },
};

function DetailLabel({ children }: { children: React.ReactNode }) {
  return <dt className="text-sm font-extrabold uppercase tracking-[0.12em] text-yellow">{children}</dt>;
}

export default function ContactPage() {
  return (
    <>
      {/* 1. Intro (DRAFT copy by Claude, Charlie to rewrite) */}
      <section className="bg-navy text-white">
        <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 sm:py-16 lg:px-8">
          <Eyebrow tone="dark">Contact</Eyebrow>
          <h1 className="mt-4 max-w-3xl text-[2.4rem] leading-[1.05] font-black tracking-[-0.02em] sm:text-5xl lg:text-6xl">
            Tell us what you need.
          </h1>
          <p className="mt-5 max-w-2xl text-lg text-white/90 [&_mark]:bg-yellow/90">
            <Copy text="The quickest way to a price is a photo of the building or van, your logo if you have one, and a rough size. We'll get back to you within [reply time: ask George]." />
          </p>
        </div>
      </section>

      {/* 2. Form + details */}
      <section className="bg-paper">
        <div className="mx-auto grid max-w-7xl gap-8 px-4 py-12 sm:px-6 sm:py-16 lg:grid-cols-[1.5fr_1fr] lg:px-8">
          <div id="quote" className="scroll-mt-24">
            <h2 className="mb-5 text-2xl font-black tracking-tight sm:text-3xl">Ask for a quote</h2>
            <QuoteForm source="Contact" />
          </div>

          <aside className="lg:pt-14">
            <div className="rounded-md bg-navy p-6 text-white sm:p-8">
              <h2 className="text-2xl font-black">Rather talk to someone?</h2>
              <a
                href={site.phoneHref}
                className="mt-5 flex items-center justify-center rounded bg-yellow px-6 py-4 text-xl font-extrabold text-navy hover:bg-white"
              >
                Call {site.phone}
              </a>
              <dl className="mt-8 space-y-6">
                <div>
                  <DetailLabel>Email</DetailLabel>
                  <dd className="mt-1 text-lg">
                    <a href={`mailto:${site.email}`} className="hover:text-yellow">
                      {site.email}
                    </a>
                  </dd>
                </div>
                <div>
                  <DetailLabel>Opening hours</DetailLabel>
                  <dd className="mt-1 text-lg">{site.hours}</dd>
                </div>
                <div>
                  <DetailLabel>Workshop</DetailLabel>
                  <dd className="mt-1 text-lg">
                    <address className="not-italic">
                      {site.address.line1}
                      <br />
                      {site.address.town}
                      <br />
                      {site.address.postcode}
                    </address>
                  </dd>
                </div>
                <div>
                  <DetailLabel>Social</DetailLabel>
                  <dd className="mt-1 text-lg">
                    <a href={site.social.facebook} className="hover:text-yellow">
                      Facebook
                    </a>{" "}
                    and{" "}
                    <a href={site.social.instagram} className="hover:text-yellow">
                      Instagram
                    </a>
                    : {site.social.handle}
                  </dd>
                </div>
              </dl>
            </div>
          </aside>
        </div>
      </section>

      {/* 3. Map */}
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <Eyebrow>Finding us</Eyebrow>
        <h2 className="mt-3 text-3xl font-black tracking-tight sm:text-4xl">On the edge of Market Harborough</h2>
        <p className="mt-4 max-w-2xl text-lg text-muted">
          <Copy text="[Parking and how to find the unit on the estate: ask George]" />
        </p>
        <div className="mt-8 overflow-hidden rounded-md border border-line">
          <iframe
            title="Map of Market Harborough, where our workshop is"
            src="https://www.openstreetmap.org/export/embed.html?bbox=-0.965%2C52.462%2C-0.875%2C52.495&layer=mapnik&marker=52.4776%2C-0.9209"
            className="h-80 w-full border-0 sm:h-[440px]"
            loading="lazy"
          />
        </div>
      </section>
    </>
  );
}
