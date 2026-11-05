# Oakfield Signs & Graphics

> Sign maker in Market Harborough. They design, make and fit every sign in house, from shop fascias to full van wraps.

*Fictional business. This is a Lune Studio work experience exercise. Brief by George Evans, dated 07/10/2026. Nothing goes live until George has seen it.*

## Project Docs

- **Copy doc:** [Oakfield Signs Website Copy](https://claude.ai/code/artifact/d58edb70-e11d-4fad-850b-d50f7dcb019a). It has the copy for every page, the image list, the URL list for George, the open questions and Claude's drafts to rewrite.
- **Prompt log:** [Oakfield Signs Prompt Log](https://claude.ai/code/artifact/f3af20ee-7c44-4ab8-8311-77298d9c1321). It has every prompt sent with a line on what changed, plus a summary of the drafts to rewrite. Add a row after every prompt.

## About This Site

**Primary Goal:** Get a local business owner or fleet manager to ring or email for a quote within a minute of landing on the site.
**Target Audience:** Local businesses and organisations across Leicestershire and Northamptonshire: shops, trades with vans, restaurants, schools and academies, councils, offices and estate agents. Most will find the site on their phone through Google search or Maps.
**Problem We Solve:** Most local sign makers' sites have almost no words, no separate page for vehicle livery, a portfolio with no client names, no explanation of how a job works, and reviews hidden at the bottom. This site fixes all of those.

### Five goals (from the brief)
1. Within five seconds, make it clear what they do, where they are, and that they design, make and fit everything themselves.
2. Give business signs and vehicle livery a full page each, so both can rank locally.
3. The portfolio is the proof. It should be a gallery you can filter by type.
4. Keep the phone number and a quote form within reach on every page.
5. Load fast on a phone.

## Business Facts (use exactly as written)

- **Address:** Unit 7, Riverside Trading Estate, Market Harborough, LE16 7XX
- **Phone:** 01858 000 000
- **Email:** hello@oakfieldsigns.co.uk
- **Hours:** Mon to Fri, 8.30am to 5pm
- **Social:** Facebook and Instagram, @oakfieldsigns
- **Team:** Dave runs the business and does most of the making and fitting. Jo does design and customer mockups. Lee fits and installs.
- **Trading:** 20 years, three people, one workshop
- **Accreditations:** BSGA member (British Sign and Graphics Association), CITB registered, DBS checked (so they can work on school sites)
- **Coverage:** Mostly Leicestershire and Northamptonshire. They fit anywhere in the UK.
- **Work split:** About half is vehicle livery and half is premises signage.
- **What they make:** shop fascias, illuminated signs, totems and tray signs, window graphics and glass manifestations, interior and wayfinding signs, honours boards, traditional hand-painted signwriting and gold leaf, banners and pop-up displays, and vehicle livery and wraps for everything from cars and vans up to lorries.

**Rule:** Every fact comes from the brief or from George. Do not make up prices, turnaround times or materials. Put a placeholder in [square brackets] and add it to the open questions list.

## Brand Identity

### Personality
- **Tone:** Casual and plain-spoken, the way Dave would explain it to a customer at the counter
- **Style:** Serious and practical
- **Feel:** Accessible, like a local tradesperson
- **Energy:** Bold, like a well-kept van: clean and readable from across the street

### Colours (from the logo pack, and only these)
- **Navy** `#1B2A41`: header, footer, dark sections
- **Signal yellow** `#F2B705`: the one accent colour, for buttons and highlights
- **White** `#FFFFFF`: content sections
- No gradients, shadows or effects on the logo

### Fonts
- **Inter** throughout the site. Headings use Inter Black or ExtraBold. Body text uses regular Inter, at 16px or larger.

### Logo files (`public/brand/`)
- `oakfield-logo-primary.svg`: the main logo, for light backgrounds
- `oakfield-logo-primary-on-dark.svg`: for the dark header and footer
- `oakfield-logo-mono-white.svg` and `oakfield-logo-mono-navy.svg`: single-colour versions
- `oakfield-logo-stacked*.svg`: square version for social media
- `oakfield-mark*.svg` and `oakfield-icon-tile.svg`: the "O" mark on its own
- **Rules:** At least 120px wide for the full logo and 24px for the mark. Leave clear space around it. Never stretch it. On photos, use the on-dark version over a dark overlay.
- **Favicon:** already set up, using the tile (`app/favicon.ico` plus PNG sizes in `public/`)

### Design direction
- Dark header and footer, white content sections, yellow accent
- Big photos. Let the best portfolio shots run the full width of the page.
- The phone number shows in the header on every page, including on mobile
- The hero has one image, one line and two buttons. No sliders.
- Motion is limited to gentle fades on scroll, at most

## Site Structure

**Main menu:** Home, Business signs, Vehicle livery, Our work, About, Contact, plus a **Get a quote** button on the right.
Sign manufacturing goes in the footer and the services block, not the main menu.

### Pages (planned, none built yet)
- **Homepage** (`/`): hero with one line, a call button and a quote button; six service tiles; four or five pieces of featured work; reviews; client logos; accreditation badges; contact block with a map
- **Business signs** (`/business-signs`): sign types in groups (exterior, illuminated, interior and wayfinding, window and glass, traditional and hand-painted) with photos for each group; how a job works; short FAQ; quote form
- **Vehicle livery** (`/vehicle-livery`): cut vinyl vs part wrap vs full wrap; fleets and keeping vehicles consistent; the design and mockup process with Jo; photos; quote form
- **Sign manufacturing** (`/sign-manufacturing`): for designers, agencies and trade customers. Materials and processes, in-house manufacturing, UK-wide installation, examples.
- **Our work** (`/our-work`): gallery you can filter by type (shop signs, vehicles, interior, illuminated, schools and councils). Each project has its own page, e.g. `/our-work/riverside-cafe-shop-front`, with the client name, what was made, a line or two and photos.
- **About** (`/about`): Dave, Jo and Lee; 20 years trading; the workshop; BSGA, CITB and DBS; why doing it all in house matters
- **Contact** (`/contact`): form (name, company, phone, email, what you need, upload a logo or photo); phone; address; map; opening hours
- **Privacy policy** (`/privacy`)
- **404 page** (for addresses that don't exist)

### Every page needs
- Header with the logo, menu, phone number and Get a quote button
- Footer with the address, phone, hours, socials, the three accreditation badges and a link to Sign manufacturing, written exactly the same way everywhere
- Its own page title under 60 characters, e.g. "Business Signs Market Harborough | Oakfield Signs"
- Its own description for Google, 140 to 155 characters
- One main heading, written for a person rather than for Google
- Alt text on every image saying what the sign is and who it was for

## What's Built

- **Homepage** (`/`), built 08/10/2026. In order:
  1. **Hero:** night-time van photo, main heading, a Call button and a Get a quote button, and a trust line (20 years, BSGA, CITB, DBS)
  2. **Six service tiles**, each linking to its page
  3. **Five featured jobs**, with the first one shown large
  4. **Five reviews**, labelled "Sample reviews"
  5. **Client names strip** (text, as there are no real logos), plus the three accreditation badges
  6. **Contact block** (navy) with phone, email, hours, address and a map of Market Harborough
- **Business signs** (`/business-signs`), built 08/10/2026. In order:
  1. **Navy intro:** heading, Call and Get a quote buttons, and an "On this page" list
  2. **The five sign groups** (exterior, illuminated, interior and wayfinding, window and glass, traditional and hand painted), each with a big photo, what's included, Charlie's copy and a "Good for" line
  3. **How a job works:** five steps
  4. **FAQ:** six questions that open when tapped
  5. **Quote form**
  - Page title: "Business Signs Market Harborough | Oakfield Signs". The description is 142 characters.
  - Any [square bracket] notes in the copy show up highlighted in yellow on the page, so it's easy to see what's still waiting on George. Once George answers, take the brackets out of the copy and the highlight goes.
- **Vehicle livery** (`/vehicle-livery`), built 08/10/2026. In order:
  1. **Navy intro:** heading, Call and Get a quote buttons, and Rosie's van photo
  2. **Cut vinyl vs part wrap vs full wrap:** three cards using Charlie's table, each with a photo and a small cost bar (1 to 3 blocks)
  3. **Fleets**
  4. **Design and mockups with Jo:** four steps
  5. **Recent vehicles:** a grid of four photos
  6. **FAQ**
  7. **Quote form**
  - Page title: "Vehicle Livery Market Harborough | Oakfield Signs". The description is 154 characters.
- **Sign manufacturing** (`/sign-manufacturing`), built 08/10/2026. It isn't in the main menu, only in the footer and the homepage tile. In order:
  1. **Navy intro:** heading, "Send your drawings" and Call buttons, and a photo
  2. **What we can make:** everything listed in the brief
  3. **Materials and processes:** a single "ask George" marker for now
  4. **Why trade customers use us:** three reasons
  5. **UK-wide installation**, with the three accreditations
  6. **Three examples**
  7. **"Send us your drawings" form**
  - Page title: "Sign Manufacturing Market Harborough | Oakfield Signs". The description is 150 characters.
  - **All of this page's copy is Claude's draft**, because the copy doc section was empty.
- **Our work** (`/our-work`), built 08/10/2026:
  - **Navy intro**
  - **Gallery:** filter buttons for All, Shop signs, Vehicles, Interior, Illuminated, and Schools and councils, each showing how many jobs it has. Every job card has its photo, a type label, the client, what was made and the town. The first job shows large when "All" is selected.
  - **"Want something like this?"** call to action
  - Page title: "Our Work: Signs and Van Livery | Oakfield Signs". The description is 153 characters.
- **Project pages** (`/our-work/riverside-cafe-shop-front` and so on, 12 in total). Each has the client name, what was made, a big photo, Charlie's line, a details box (client, where, what we made, type), Call / Get a quote buttons, three more jobs, and a "Next job" link. Each project's page title and Google description are built automatically from its details: titles are under 60 characters and descriptions are 140 to 155.
- **Project list** (`lib/work.ts`): every portfolio job lives in this one file. To add a job, add an entry there with its photo, and it appears in the gallery with its own page.
- **About** (`/about`), built 08/10/2026. In order:
  1. **Navy intro:** heading plus "20 years / 3 people / 1 workshop" figures
  2. **Team cards** for Dave, Jo and Lee, using Charlie's lines. Yellow initials stand in until there are real team photos.
  3. **The workshop:** a stock photo (`public/images/sign-workshop-market-harborough.jpg`) and the address
  4. **Why we do it all ourselves:** four reasons
  5. **Accreditation badges**
  6. **Call to action**
  - Page title: "About Us: Sign Makers in Market Harborough | Oakfield Signs" (59 characters). The description is 150 characters.
- **Contact** (`/contact`), built 08/10/2026. In order:
  1. **Navy intro**
  2. **Quote form** (this is where every "Get a quote" button goes, `/contact#quote`) next to a navy details card with a big Call button, email, opening hours, address and socials
  3. **"Finding us"** with the map
  - Page title: "Contact Oakfield Signs, Market Harborough | Oakfield Signs" (58 characters). The description is 152 characters and uses the exact address and hours.
- **Privacy policy** (`/privacy`), built 08/10/2026. Eight short sections in plain English: who we are, what we collect, why, who we share it with, how long we keep it, cookies and maps, your rights (including the ICO), and changes. **Claude's draft, not legal advice. George must check it.** Two yellow markers are waiting: the form service's name, and how long records are kept.
- **Quote form** (`components/QuoteForm.tsx`): name, business, phone, email, what you need, and a logo or photo upload. Its labels and help text are from Charlie's Contact copy. **It doesn't send yet.** It needs an email form service (for example Formspree) to be connected, and until then it shows a "not connected yet" message with the phone number. File uploads may need a paid plan on some services.
- **404 page:** "We can't find that page", with buttons back to the homepage and to call
- **Header** (`components/SiteHeader.tsx`): navy, with the logo, the menu, the phone number (visible on phones too) and a yellow Get a quote button. On phones the menu folds behind a menu button.
- **Footer** (`components/SiteFooter.tsx`): navy, with the logo, address, hours, phone, email, socials, service links (including Sign manufacturing), a compact accreditation row and a privacy policy link
- **Business details** (`lib/site.ts`): the address, phone, email, hours and socials live in this one file, so they read exactly the same everywhere. Change them there.
- **Google:** the homepage title is "Signs and Vehicle Livery Market Harborough | Oakfield Signs" (59 characters). The description is 148 characters. LocalBusiness schema (business details Google can read) is set up in `app/layout.tsx`.
- **"Get a quote"** buttons all go to the form on the Contact page (`/contact#quote`).

### Claude's drafts to rewrite

Claude wrote these where the copy doc was empty, so the pages would work. The copy is meant to be Charlie's. The same checklist, with the exact wording, is in the copy doc under "Claude's drafts to rewrite". When Charlie rewrites one there, Claude swaps it in on the site. Anything not listed here is Charlie's own copy.

- [ ] **Every page:** the three accreditation lines (`lib/site.ts`) and the footer line (`components/SiteFooter.tsx`)
- [ ] **Homepage** (`app/page.tsx`): hero heading and line, the section headings, the contact block, page title, Google description
- [ ] **Business signs** (`app/business-signs/page.tsx`): heading, intro, the How a job works heading and all five steps, the quote form heading and line, Google description
- [ ] **Vehicle livery** (`app/vehicle-livery/page.tsx`): heading, intro, "Not sure which?" line, the fleets section (check "we keep your design on file" with George), the design heading and Jo's four steps, the extra cars and lorries FAQ, the quote form heading and line, Google description
- [ ] **Sign manufacturing** (`app/sign-manufacturing/page.tsx`): the whole page
- [ ] **Our work** (`app/our-work/page.tsx`): heading, intro, call to action, page title, Google description. Project page titles and descriptions are built automatically from `lib/work.ts`.
- [ ] **About** (`app/about/page.tsx`): heading, intro, workshop paragraph, the four reasons (check "There's no sales team" and "Jo's mockup goes straight to the workshop" with George), call to action, page title, Google description
- [ ] **Contact** (`app/contact/page.tsx` and `components/QuoteForm.tsx`): heading, intro, the section headings, the message after sending, page title, Google description
- [ ] **Privacy policy** (`app/privacy/page.tsx`): the whole page. Not legal advice, so George needs to check it.
- [ ] **404 page** (`app/not-found.tsx`): heading and line

## Content Status

- [x] Logo: supplied in the logo pack and copied into the project
- [x] Favicon: supplied and set up
- [x] Photos: 12 portfolio photos from Unsplash are in `public/images/work/`, each under 300KB. The source and photographer for each one are in the Image list section of the copy doc. They're stand-ins: some don't exactly match their project (see Recent Changes), and Charlie still needs to approve them.
- [ ] Copy: partly done. Charlie's copy is in for the service tiles, featured work, reviews, sign groups, FAQs, the van comparison table, the team and the portfolio. The rest is Claude's drafts (see "Claude's drafts to rewrite" above). No "we pride ourselves", "bespoke solutions" or "look no further".
- [x] Reviews: five sample reviews, labelled "Sample reviews" on the homepage
- [x] Portfolio: 12 made-up local clients, in `lib/work.ts`

## Build Plan (from the brief)

1. **Content first:** sitemap, copy for every page, image list
2. **Foundations and homepage:** fonts, colours, header and footer, then the homepage
3. **One page at a time:** Business signs, Vehicle livery, Sign manufacturing, then Our work, About, Contact
4. **Finish:** test the form, check on mobile, SEO checklist, spelling pass, 404 page, privacy page, LocalBusiness schema (business details that Google can read), and a list of every URL

## Recent Changes

- 05/11/2026: Got the site ready to publish on GitHub Pages instead of Vercel. The GitHub version is built as plain files, with its links and images pointing to the `/oakfield` folder, and the preview in Ship Studio works as before. Test build passed (all pages, no broken link paths). **Not online yet.** Because GitHub Pages can't resize photos, every screen gets the full-size file. They're all under 300KB, so this should be fine, but check the speed on a phone.
- 29/10/2026: Hid the site from Google and other search engines while it's a draft (it still has placeholder details and a form that doesn't send). Anyone with the link can still open it. To undo this at launch, delete the `robots` lines in `app/layout.tsx`. Not published online yet: publishing from this computer is blocked by a Windows setting.
- 08/10/2026: Started the prompt log doc and added links to it and the copy doc at the top of SITE.md.
- 08/10/2026: Added the full "Claude's drafts to rewrite" checklist to SITE.md and the copy doc. Updated Content Status.
- 08/10/2026: Checked all 20 page addresses in the preview (all load, and unknown addresses show the 404 page). Added the full URL list with page titles to the copy doc under "URL list (for George)".
- 08/10/2026: Built the Privacy policy page as a draft, based on what the site actually collects (the quote form fields, no tracking cookies, the OpenStreetMap maps). George needs to check it or swap in the studio's template.
- 08/10/2026: Built the Contact page. Claude drafted the heading and intro. Tested sending the form: it shows the "not connected yet" message as expected. It still needs a form service connecting before Charlie can do the brief's test enquiry.
- 08/10/2026: Built the About page. The team lines are Charlie's. Claude drafted the heading, intro, workshop text, the four "why" reasons and the call to action. Added a stock workshop photo from Unsplash (Point3D Commercial Imaging Ltd.) and recorded it in the image list.
- 08/10/2026: Built the Our work gallery with filters, plus 12 project pages from Charlie's project table. Claude drafted the intro heading and line and the page title. Riverside Cafe's "What was made" is shown as "Projecting sign", to match the photo and the homepage.
- 08/10/2026: Built the Sign manufacturing page. All the copy is Claude's draft, written from the brief. The materials and processes section is waiting on George.
- 08/10/2026: Built the Vehicle livery page. Claude drafted the heading, intro, "Not sure which?" line, fleets section, Jo's four design steps, the FAQ answer about cars and lorries, the quote form intro, and the Google description. Charlie needs to rewrite them. Also switched images to Next.js's newer way of loading the top photo first.
- 08/10/2026: Built the Business signs page and a reusable quote form. Claude drafted the heading, intro, How a job works steps, page title, Google description and the quote form intro, and Charlie needs to rewrite them.
- 08/10/2026: Built the foundations (Inter font, navy, yellow and white colours, header, footer, business details file, favicon, Google business details) plus the homepage and 404 page. Checked at desktop width and on phone widths (375px and 360px).
- 08/10/2026: Changed the copy in the copy doc to match the photos: Ashby Road Dental is now Station Road Coffee, Riverside Cafe's job is now a projecting sign, Sutton Brook's job is now footpath fingerposts, and Rosie's van is now hand-lettered instead of wrapped. Renamed the matching photo files. Mill Lane, Tidy Paws and Kettle & Crown are on the open questions list for George.
- 08/10/2026: Added 12 stock photos to `public/images/work/` and recorded their sources in the copy doc. Photos that don't quite match their project: Ashby Road Dental (the sign says "COFFEE"), Riverside Cafe (a box sign, not hand-painted), Sutton Brook (a footpath fingerpost, not a village sign), Rosie's (a vintage van, not a full wrap), Mill Lane and Tidy Paws (plain white vans, no livery).
- 08/10/2026: Project set up from the brief. Copied the logo pack into `public/brand/` and replaced the default favicon with the Oakfield tile.

## How to Customise

- **To change colours:** ask for it to be changed in `app/globals.css`, but stick to the three logo colours
- **To add a page:** ask for a new page and give its address, e.g. "/vehicle-livery"

---

*This file is your site's source of truth. Claude updates it after every change.*
