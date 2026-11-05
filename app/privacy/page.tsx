import type { Metadata } from "next";
import { Copy, Eyebrow } from "@/components/ui";
import { fullAddress, site } from "@/lib/site";

// DRAFT privacy policy written by Claude from what the site actually does.
// Not legal advice: George to check, or swap in the studio's own template.

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "How Oakfield Signs uses the details you send through our quote form, by phone or by email, how long we keep them, and how to ask us to delete them.",
  alternates: { canonical: "/privacy" },
};

const sections: { heading: string; body: string[] }[] = [
  {
    heading: "Who we are",
    body: [
      `${site.name} is a sign maker based at ${fullAddress}. When this policy says "we" or "us", it means us. If you have a question about your details, email ${site.email} or ring ${site.phone}.`,
    ],
  },
  {
    heading: "What we collect",
    body: [
      "When you use the quote form on this website, we collect your name, business name, phone number, email address, what you've told us you need, and any logo or photo you attach. Only your name, email address and message are required.",
      "If you ring or email us instead, we keep a note of your details and what you asked for.",
    ],
  },
  {
    heading: "Why we use it",
    body: [
      "We use your details to reply to you, work out a price, design and make your sign or livery, and arrange fitting. We do this because you've asked us for a quote, and because we need it to do the job.",
      "We won't add you to a mailing list or send you marketing.",
    ],
  },
  {
    heading: "Who we share it with",
    body: [
      "We don't sell your details or pass them to other businesses to market to you.",
      "Messages from the quote form are delivered to us by an email form service. [Name of the form service and a link to its privacy policy: confirm once it's set up]",
    ],
  },
  {
    heading: "How long we keep it",
    body: ["[How long enquiries and job records are kept: ask George]"],
  },
  {
    heading: "Cookies and maps",
    body: [
      "This website doesn't use advertising or tracking cookies.",
      "The maps on our homepage and contact page are provided by OpenStreetMap. When a map loads, your browser connects to OpenStreetMap, which can see your IP address. Their privacy policy is at osmfoundation.org.",
    ],
  },
  {
    heading: "Your rights",
    body: [
      `You can ask us for a copy of the details we hold about you, ask us to correct them, or ask us to delete them. Email ${site.email} and we'll reply within one month.`,
      "If you're unhappy with how we've handled your details, you can complain to the Information Commissioner's Office at ico.org.uk.",
    ],
  },
  {
    heading: "Changes to this policy",
    body: ["If we change how we use your details, we'll update this page. This version was last updated on 8 October 2026."],
  },
];

export default function PrivacyPage() {
  return (
    <>
      <section className="bg-navy text-white">
        <div className="mx-auto max-w-3xl px-4 py-14 sm:px-6 sm:py-16">
          <Eyebrow tone="dark">Privacy</Eyebrow>
          <h1 className="mt-4 text-[2.4rem] leading-[1.05] font-black tracking-[-0.02em] sm:text-5xl">
            Privacy policy
          </h1>
          <p className="mt-5 text-lg text-white/90">
            What we do with the details you send us, in plain English.
          </p>
        </div>
      </section>

      <article className="mx-auto max-w-3xl px-4 py-14 sm:px-6 sm:py-16">
        {sections.map((s) => (
          <section key={s.heading} className="border-b border-line py-8 first:pt-0 last:border-0">
            <h2 className="text-2xl font-black tracking-tight">{s.heading}</h2>
            <div className="mt-4 space-y-4 text-lg leading-relaxed text-ink/90">
              {s.body.map((p) => (
                <p key={p}>
                  <Copy text={p} />
                </p>
              ))}
            </div>
          </section>
        ))}
      </article>
    </>
  );
}
