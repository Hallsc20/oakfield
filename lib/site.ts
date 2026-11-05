// Business details used across the whole site.
// Change them here and they update everywhere (header, footer, contact blocks, Google data).

export const site = {
  name: "Oakfield Signs & Graphics",
  shortName: "Oakfield Signs",
  url: "https://www.oakfieldsigns.co.uk",
  phone: "01858 000 000",
  phoneHref: "tel:+441858000000",
  email: "hello@oakfieldsigns.co.uk",
  address: {
    line1: "Unit 7, Riverside Trading Estate",
    town: "Market Harborough",
    postcode: "LE16 7XX",
  },
  hours: "Mon to Fri, 8.30am to 5pm",
  social: {
    handle: "@oakfieldsigns",
    facebook: "https://www.facebook.com/oakfieldsigns",
    instagram: "https://www.instagram.com/oakfieldsigns",
  },
  accreditations: [
    {
      short: "BSGA",
      name: "British Sign and Graphics Association",
      line: "Members of the British Sign and Graphics Association.",
    },
    {
      short: "CITB",
      name: "CITB registered",
      line: "Registered with CITB, the construction industry training board.",
    },
    {
      short: "DBS",
      name: "DBS checked",
      line: "The whole team is DBS checked, so we can work on school sites.",
    },
  ],
} as const;

export const fullAddress = `${site.address.line1}, ${site.address.town}, ${site.address.postcode}`;

export const mainNav = [
  { href: "/", label: "Home" },
  { href: "/business-signs", label: "Business signs" },
  { href: "/vehicle-livery", label: "Vehicle livery" },
  { href: "/our-work", label: "Our work" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
] as const;

export const quoteHref = "/contact#quote";
