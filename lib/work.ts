// Every portfolio project, from the Our work table in the copy doc.
// Add a project here and it appears in the gallery and gets its own page.

export const workTypes = ["Shop signs", "Vehicles", "Interior", "Illuminated", "Schools and councils"] as const;
export type WorkType = (typeof workTypes)[number];

export type Project = {
  slug: string;
  client: string;
  town: string;
  type: WorkType;
  made: string;
  line: string;
  image: string;
  alt: string;
  imagePosition?: string;
};

export const projects: Project[] = [
  {
    slug: "riverside-cafe-shop-front",
    client: "Riverside Cafe",
    town: "Market Harborough",
    type: "Shop signs",
    made: "Projecting sign",
    line: "A double-sided projecting sign, made in our workshop and fitted before the cafe opened one morning.",
    image: "/images/work/shop-front-riverside-cafe-market-harborough.jpg",
    alt: "Projecting sign for Riverside Cafe, Market Harborough",
  },
  {
    slug: "mill-lane-plumbing-part-wrap",
    client: "Mill Lane Plumbing & Heating",
    town: "Market Harborough",
    type: "Vehicles",
    made: "Part wrap on two vans",
    line: "Name, number and logo on both vans, big enough to read from across the road.",
    image: "/images/work/part-wrap-vans-mill-lane-plumbing-market-harborough.jpg",
    alt: "Part wrap on two vans for Mill Lane Plumbing & Heating, Market Harborough",
  },
  {
    slug: "brook-lane-primary-school-wayfinding",
    client: "Brook Lane Primary School",
    town: "Kibworth",
    type: "Schools and councils",
    made: "Entrance sign and wayfinding",
    line: "A new sign at the gate and signs around the site to help visitors find reception.",
    image: "/images/work/wayfinding-signs-brook-lane-primary-school-kibworth.jpg",
    alt: "Entrance and wayfinding signs for Brook Lane Primary School, Kibworth",
  },
  {
    slug: "tidy-paws-dog-grooming-full-wrap",
    client: "Tidy Paws Dog Grooming",
    town: "Market Harborough",
    type: "Vehicles",
    made: "Full wrap on a grooming van",
    line: "A full wrap in their colours, designed by Jo from a photo of the van and the logo.",
    image: "/images/work/full-wrap-van-tidy-paws-dog-grooming-market-harborough.jpg",
    alt: "Full wrap on a grooming van for Tidy Paws Dog Grooming, Market Harborough",
  },
  {
    slug: "station-road-coffee-illuminated-sign",
    client: "Station Road Coffee",
    town: "Market Harborough",
    type: "Illuminated",
    made: "Illuminated box sign",
    line: "A lit sign over the door, so people can find the shop on dark winter mornings and evenings.",
    image: "/images/work/illuminated-sign-station-road-coffee-market-harborough.jpg",
    alt: "Illuminated box sign for Station Road Coffee, Market Harborough",
  },
  {
    slug: "hartley-builders-van-lettering",
    client: "Hartley Builders",
    town: "Corby",
    type: "Vehicles",
    made: "Cut vinyl lettering on five vans",
    line: "The same name, number and layout on every van, ready to copy onto new vans as they arrive.",
    image: "/images/work/van-lettering-hartley-builders-corby.jpg",
    alt: "Cut vinyl lettering on vans for Hartley Builders, Corby",
  },
  {
    slug: "kettle-and-crown-pub-sign",
    client: "The Kettle & Crown",
    town: "Desborough",
    type: "Shop signs",
    made: "Hand-painted pub sign",
    line: "A hanging sign painted by hand, plus gold leaf lettering along the front of the pub.",
    image: "/images/work/hand-painted-pub-sign-kettle-and-crown-desborough.jpg",
    alt: "Hand-painted pub sign for The Kettle & Crown, Desborough",
  },
  {
    slug: "greenway-landscapes-part-wrap",
    client: "Greenway Landscapes",
    town: "Kettering",
    type: "Vehicles",
    made: "Part wrap on a pickup and trailer",
    line: "Matching graphics on the pickup and the trailer, so the whole rig reads as one advert.",
    image: "/images/work/part-wrap-pickup-greenway-landscapes-kettering.jpg",
    alt: "Part wrap on a pickup and trailer for Greenway Landscapes, Kettering",
  },
  {
    slug: "fernleigh-accountants-reception-sign",
    client: "Fernleigh Accountants",
    town: "Leicester",
    type: "Interior",
    made: "Reception sign and glass manifestations",
    line: "A sign behind the reception desk and frosted strips on the office glass, all in their brand colours.",
    image: "/images/work/reception-sign-fernleigh-accountants-leicester.jpg",
    alt: "Reception sign and glass manifestations for Fernleigh Accountants, Leicester",
    imagePosition: "object-[center_55%]",
  },
  {
    slug: "sutton-brook-parish-council-fingerposts",
    client: "Sutton Brook Parish Council",
    town: "Sutton Brook",
    type: "Schools and councils",
    made: "Footpath and bridleway fingerposts",
    line: "Wooden fingerposts for the footpaths and bridleways around the parish, made in our workshop and fitted by Lee.",
    image: "/images/work/fingerpost-signs-sutton-brook.jpg",
    alt: "Wooden fingerpost signs for Sutton Brook Parish Council",
  },
  {
    slug: "bridgefield-couriers-van-lettering",
    client: "Bridgefield Couriers",
    town: "Northampton",
    type: "Vehicles",
    made: "Cut vinyl lettering on three vans",
    line: "Clear name, phone number and website on three vans, done in one visit.",
    image: "/images/work/van-lettering-bridgefield-couriers-northampton.jpg",
    alt: "Cut vinyl lettering on vans for Bridgefield Couriers, Northampton",
  },
  {
    slug: "rosies-ice-cream-van-signwriting",
    client: "Rosie's Ice Cream",
    town: "Lutterworth",
    type: "Vehicles",
    made: "Hand-lettered vintage ice cream van",
    line: "Lettering painted by hand on their vintage van, so it's easy to spot at events.",
    image: "/images/work/hand-lettered-ice-cream-van-rosies-lutterworth.jpg",
    alt: "Hand-lettered vintage ice cream van for Rosie's Ice Cream, Lutterworth",
    imagePosition: "object-top",
  },
];

export function getProject(slug: string) {
  return projects.find((p) => p.slug === slug);
}

// Page title for a project page, kept under 60 characters including " | Oakfield Signs".
export function projectTitle(p: Project) {
  const full = `${p.client}: ${p.made}`;
  return full.length <= 42 ? full : p.client;
}

// Google description for a project page, aiming for 140 to 155 characters.
export function projectDescription(p: Project) {
  const endings = [
    " Designed, made and fitted by Oakfield Signs.",
    " Made and fitted by Oakfield Signs.",
    " By Oakfield Signs, Market Harborough.",
    " By Oakfield Signs.",
    "",
  ];
  const bases = [`${p.client}, ${p.town}: ${p.line}`, `${p.client}: ${p.line}`];
  for (const base of bases) {
    for (const end of endings) {
      const d = base + end;
      if (d.length >= 140 && d.length <= 155) return d;
    }
  }
  return bases[0];
}
