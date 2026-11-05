"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { mainNav, quoteHref, site } from "@/lib/site";

function PhoneIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className={className} fill="currentColor">
      <path d="M6.6 10.8a15.1 15.1 0 0 0 6.6 6.6l2.2-2.2a1 1 0 0 1 1-.25 11.4 11.4 0 0 0 3.6.57 1 1 0 0 1 1 1V20a1 1 0 0 1-1 1A17 17 0 0 1 3 4a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1c0 1.25.2 2.45.57 3.57a1 1 0 0 1-.25 1z" />
    </svg>
  );
}

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 bg-navy text-white shadow-[0_1px_0_rgba(255,255,255,0.08)]">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:bg-yellow focus:px-4 focus:py-2 focus:text-navy"
      >
        Skip to content
      </a>
      <div className="mx-auto flex h-18 max-w-7xl items-center justify-between gap-4 px-4 sm:h-20 sm:px-6 lg:px-8">
        <Link href="/" className="shrink-0" aria-label="Oakfield Signs & Graphics, home">
          <Image
            src="/brand/oakfield-logo-primary-on-dark.svg"
            alt="Oakfield Signs & Graphics"
            width={422}
            height={100}
            preload
            loading="eager"
            className="h-8 w-auto min-[400px]:h-10 sm:h-12"
          />
        </Link>

        <nav aria-label="Main" className="hidden lg:block">
          <ul className="flex items-center gap-1">
            {mainNav.map((item) => {
              const active = item.href === "/" ? pathname === "/" : pathname.startsWith(item.href);
              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    aria-current={active ? "page" : undefined}
                    className={`rounded px-3 py-2 text-[15px] font-semibold transition-colors hover:text-yellow ${
                      active ? "text-yellow" : "text-white/90"
                    }`}
                  >
                    {item.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        <div className="flex items-center gap-1 sm:gap-3">
          <a
            href={site.phoneHref}
            className="flex items-center gap-2 rounded px-1.5 py-2 font-bold text-yellow hover:text-white min-[400px]:text-white min-[400px]:hover:text-yellow"
          >
            <PhoneIcon className="hidden h-5 w-5 text-yellow min-[400px]:block" />
            <span className="whitespace-nowrap text-[15px] sm:text-base">{site.phone}</span>
          </a>
          <Link
            href={quoteHref}
            className="hidden rounded bg-yellow px-4 py-2.5 text-[15px] font-extrabold text-navy transition-colors hover:bg-white sm:inline-block"
          >
            Get a quote
          </Link>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="mobile-menu"
            className="rounded p-2 text-white hover:text-yellow lg:hidden"
          >
            <span className="sr-only">{open ? "Close menu" : "Open menu"}</span>
            <svg viewBox="0 0 24 24" className="h-7 w-7" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
              {open ? (
                <path strokeLinecap="round" d="M6 6l12 12M18 6L6 18" />
              ) : (
                <path strokeLinecap="round" d="M4 7h16M4 12h16M4 17h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {open && (
        <nav id="mobile-menu" aria-label="Main" className="border-t border-white/10 bg-navy lg:hidden">
          <ul className="mx-auto max-w-7xl px-4 py-3 sm:px-6">
            {mainNav.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="block border-b border-white/10 py-3 text-lg font-semibold text-white hover:text-yellow"
                >
                  {item.label}
                </Link>
              </li>
            ))}
            <li className="pt-4 pb-2">
              <Link
                href={quoteHref}
                onClick={() => setOpen(false)}
                className="block rounded bg-yellow px-4 py-3 text-center text-lg font-extrabold text-navy"
              >
                Get a quote
              </Link>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}
