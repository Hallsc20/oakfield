import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { AgentationProvider } from "@/components/AgentationProvider";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { site } from "@/lib/site";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

// The folder the site lives in on GitHub Pages. Empty everywhere else.
const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: "Signs and Vehicle Livery Market Harborough | Oakfield Signs",
    template: "%s | Oakfield Signs",
  },
  description:
    "Shop signs, lit signs and van livery, designed, made and fitted by our team in Market Harborough. Ring 01858 000 000 or send us a photo for a quote.",
  icons: {
    icon: [
      { url: `${basePath}/favicon.ico`, sizes: "any" },
      { url: `${basePath}/favicon-32.png`, type: "image/png", sizes: "32x32" },
      { url: `${basePath}/favicon-192.png`, type: "image/png", sizes: "192x192" },
    ],
    apple: `${basePath}/apple-touch-icon.png`,
  },
  // Draft site: tells Google and other search engines not to list it.
  // Delete these lines when the site is ready to launch.
  robots: { index: false, follow: false },
};

// Business details Google can read (LocalBusiness schema).
const localBusiness = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: site.name,
  url: site.url,
  telephone: "+441858000000",
  email: site.email,
  logo: `${site.url}/favicon-512.png`,
  address: {
    "@type": "PostalAddress",
    streetAddress: site.address.line1,
    addressLocality: site.address.town,
    postalCode: site.address.postcode,
    addressCountry: "GB",
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "08:30",
      closes: "17:00",
    },
  ],
  areaServed: ["Leicestershire", "Northamptonshire", "United Kingdom"],
  sameAs: [site.social.facebook, site.social.instagram],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-GB" className={inter.variable}>
      <body className="font-sans antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusiness) }}
        />
        <SiteHeader />
        <main id="main">{children}</main>
        <SiteFooter />
        <AgentationProvider />
      </body>
    </html>
  );
}
