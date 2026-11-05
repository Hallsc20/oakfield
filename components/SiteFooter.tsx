import Image from "next/image";
import Link from "next/link";
import { mainNav, site } from "@/lib/site";
import { AccreditationBadges } from "@/components/AccreditationBadges";

const serviceLinks = [
  { href: "/business-signs", label: "Business signs" },
  { href: "/vehicle-livery", label: "Vehicle livery" },
  { href: "/sign-manufacturing", label: "Sign manufacturing" },
  { href: "/our-work", label: "Our work" },
];

export function SiteFooter() {
  return (
    <footer className="bg-navy text-white">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <div>
            <Image
              src="/brand/oakfield-logo-primary-on-dark.svg"
              alt="Oakfield Signs & Graphics"
              width={422}
              height={100}
              className="h-12 w-auto"
            />
            <p className="mt-5 max-w-xs text-white/80">
              Signs and vehicle livery, designed, made and fitted in Market Harborough.
            </p>
          </div>

          <div>
            <h2 className="text-sm font-extrabold uppercase tracking-[0.12em] text-yellow">Find us</h2>
            <address className="mt-4 not-italic leading-7 text-white/90">
              {site.address.line1}
              <br />
              {site.address.town}
              <br />
              {site.address.postcode}
            </address>
            <p className="mt-4 text-white/90">{site.hours}</p>
          </div>

          <div>
            <h2 className="text-sm font-extrabold uppercase tracking-[0.12em] text-yellow">Get in touch</h2>
            <ul className="mt-4 space-y-2">
              <li>
                <a href={site.phoneHref} className="text-lg font-bold hover:text-yellow">
                  {site.phone}
                </a>
              </li>
              <li>
                <a href={`mailto:${site.email}`} className="text-white/90 hover:text-yellow">
                  {site.email}
                </a>
              </li>
              <li className="pt-2 text-white/90">
                <a href={site.social.facebook} className="hover:text-yellow">
                  Facebook
                </a>{" "}
                and{" "}
                <a href={site.social.instagram} className="hover:text-yellow">
                  Instagram
                </a>
                : {site.social.handle}
              </li>
            </ul>
          </div>

          <div>
            <h2 className="text-sm font-extrabold uppercase tracking-[0.12em] text-yellow">What we do</h2>
            <ul className="mt-4 space-y-2">
              {serviceLinks.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="text-white/90 hover:text-yellow">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-white/10 pt-8">
          <AccreditationBadges tone="dark" />
        </div>

        <div className="mt-10 flex flex-col gap-4 border-t border-white/10 pt-6 text-sm text-white/60 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} {site.name}</p>
          <ul className="flex flex-wrap gap-x-5 gap-y-2">
            {mainNav.slice(4).map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="hover:text-yellow">
                  {item.label}
                </Link>
              </li>
            ))}
            <li>
              <Link href="/privacy" className="hover:text-yellow">
                Privacy policy
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
