"use client";

import { useState } from "react";
import { Copy } from "@/components/ui";
import { site } from "@/lib/site";

// Where enquiries are sent. Set NEXT_PUBLIC_FORM_ENDPOINT to a form service URL
// (for example a Formspree form) to switch sending on.
const endpoint = process.env.NEXT_PUBLIC_FORM_ENDPOINT;

const inputClass =
  "mt-2 block w-full rounded border border-navy/25 bg-white px-4 py-3 text-base text-navy placeholder:text-navy/40 focus:border-navy focus:outline-none focus:ring-2 focus:ring-yellow";

function Field({
  label,
  help,
  required,
  children,
}: {
  label: string;
  help?: string;
  required?: boolean;
  children: React.ReactNode;
}) {
  return (
    <label className="block">
      <span className="font-bold text-navy">
        {label}
        {!required && <span className="font-normal text-muted"> (optional)</span>}
      </span>
      {children}
      {help && (
        <span className="mt-1.5 block text-[15px] text-muted">
          <Copy text={help} />
        </span>
      )}
    </label>
  );
}

export function QuoteForm({ source }: { source: string }) {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!endpoint) {
      setStatus("error");
      return;
    }
    setStatus("sending");
    try {
      const res = await fetch(endpoint, {
        method: "POST",
        body: new FormData(e.currentTarget),
        headers: { Accept: "application/json" },
      });
      setStatus(res.ok ? "sent" : "error");
    } catch {
      setStatus("error");
    }
  }

  if (status === "sent") {
    return (
      <div role="status" className="rounded-md border-l-4 border-yellow bg-white p-8">
        <p className="text-2xl font-black text-navy">Thanks, we&apos;ve got your message.</p>
        <p className="mt-3 text-lg text-muted">
          <Copy text="We'll get back to you within [reply time: ask George]." />
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="grid gap-6 rounded-md bg-white p-6 sm:p-8">
      <input type="hidden" name="page" value={source} />
      <div className="grid gap-6 sm:grid-cols-2">
        <Field label="Your name" required>
          <input name="name" required autoComplete="name" className={inputClass} />
        </Field>
        <Field label="Business name" help="Leave blank if it's for you or your home.">
          <input name="company" autoComplete="organization" className={inputClass} />
        </Field>
        <Field label="Phone number" help="Add it if you'd rather we called you back.">
          <input name="phone" type="tel" autoComplete="tel" className={inputClass} />
        </Field>
        <Field label="Email address" help="We'll send your quote here." required>
          <input name="email" type="email" required autoComplete="email" className={inputClass} />
        </Field>
      </div>
      <Field label="What do you need?" required>
        <textarea
          name="message"
          required
          rows={5}
          placeholder={'For example, "A new fascia for our shop" or "Livery for three vans"'}
          className={inputClass}
        />
      </Field>
      <Field
        label="Add your logo or a photo"
        help="A photo of your shop front or van helps us quote faster. [file types and size limit: ask George]"
      >
        <input
          name="upload"
          type="file"
          accept="image/*,.pdf"
          className="mt-2 block w-full text-base text-navy file:mr-4 file:rounded file:border-0 file:bg-navy file:px-4 file:py-2.5 file:font-bold file:text-white hover:file:bg-navy-deep"
        />
      </Field>

      {status === "error" && (
        <p role="alert" className="rounded border border-navy/20 bg-paper p-4 text-navy">
          {endpoint
            ? "Sorry, that didn't send. Please try again, or ring us on "
            : "This form isn't connected yet. Please ring us on "}
          <a href={site.phoneHref} className="font-bold underline">
            {site.phone}
          </a>{" "}
          or email{" "}
          <a href={`mailto:${site.email}`} className="font-bold underline">
            {site.email}
          </a>
          .
        </p>
      )}

      <div>
        <button
          type="submit"
          disabled={status === "sending"}
          className="w-full rounded bg-yellow px-8 py-4 text-lg font-extrabold text-navy transition-colors hover:bg-navy hover:text-white disabled:opacity-60 sm:w-auto"
        >
          {status === "sending" ? "Sending…" : "Send for a quote"}
        </button>
      </div>
    </form>
  );
}
