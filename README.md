# YL Cricket Academy — Website (Angular)

A modern, mobile-responsive multi-page website for **YL Cricket Academy**,
built with **Angular 17 (standalone components)**. It showcases the
academy's coaching programs, expert coaches, facilities, match fixtures,
tours and a contact/enquiry form — along with a continuously scrolling
news ticker and a vertical scrolling sponsor ad rail.

---

## ✨ Features

- **Multi-page site** with Angular Router:
  - **Home** — hero with stadium image, scoreboard-style stats strip, program & coach highlights, testimonials, CTA banner
  - **About** — academy story, values, facilities, milestones timeline
  - **Coaches** — grid of expert coach profiles with specialties
  - **Programs** — detailed list of training programs (Junior, Youth, Elite, Fast Bowling, Batting, Wicketkeeping)
  - **Gallery** — filterable photo gallery (Training / Matches / Tours / Facilities)
  - **Matches & Tours** — fixtures/results table + upcoming seasonal tours
  - **Contact** — enquiry form (with validation), academy info, map placeholder, FAQs
- **Stadium hero image** on the Home page (top section)
- **Continuously moving news ticker** (auto-scrolling marquee, pauses on hover)
- **Vertical scrolling sponsor ad rail** (auto-scrolling, sticky sidebar on desktop, hidden on small screens)
- **Fully responsive** — works on mobile, tablet and desktop with a collapsible hamburger menu
- **Scroll-triggered reveal transitions** — sections, cards, images and list items fade/slide into view as you scroll down any page (see below)
- **Distinct visual identity** — "stadium scoreboard" theme using a deep pitch-green / cricket-ball-red / willow-tan palette, condensed display type and monospace scoreboard accents

---

## 🗂 Project Structure

```
src/
├── index.html
├── main.ts
├── styles.scss                 # global design tokens & base styles
└── app/
    ├── app.component.ts/html/scss   # root layout (navbar, ticker, ad rail, footer)
    ├── app.config.ts                # app providers & router config
    ├── app.routes.ts                # all page routes
    ├── shared/
    │   ├── navbar/                  # responsive nav bar with mobile menu
    │   ├── footer/                  # site footer with links & contact info
    │   ├── news-ticker/             # horizontal auto-scrolling news ticker
    │   └── ad-banner/                # vertical auto-scrolling sponsor ads
    └── pages/
        ├── home/
        ├── about/
        ├── coaches/
        ├── programs/
        ├── gallery/
        ├── matches/
        └── contact/
```

---

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) v18 or later
- npm v9 or later
- Angular CLI (optional, but recommended):
  ```bash
  npm install -g @angular/cli
  ```

### Installation

1. Unzip the project and move into the folder:
   ```bash
   cd yl-cricket-academy
   ```
2. Install dependencies:
   ```bash
   npm install
   ```

### Run the development server

```bash
npm start
```
or
```bash
ng serve
```

Then open **http://localhost:4200** in your browser. The app will reload
automatically when you change any source file.

### Build for production

```bash
npm run build
```

The production build will be generated in `dist/yl-cricket-academy/`. You
can deploy the contents of this folder to any static hosting service
(Netlify, Vercel, GitHub Pages, Firebase Hosting, an Nginx server, etc.).

---

## 🖼 Replacing the Images

All images currently use **picsum.photos placeholder images** (loaded from
the internet) so the site works out of the box. For a production launch,
replace them with real academy photos:

1. Add your photos to the `public/` folder (e.g. `public/images/...`).
2. Update the `image` / `src` values in the relevant component `.ts` or
   `.html` files:
   - `src/app/pages/home/home.component.ts` — hero (in `home.component.html`), highlight cards, program previews, testimonial avatars
   - `src/app/pages/about/about.component.ts` — facility photos
   - `src/app/pages/coaches/coaches.component.ts` — coach photos
   - `src/app/pages/programs/programs.component.ts` — program photos
   - `src/app/pages/gallery/gallery.component.ts` — gallery images
   - `src/app/pages/matches/matches.component.ts` — tour destination photos
   - `src/app/shared/ad-banner/ad-banner.component.ts` — sponsor ad images

For the **stadium hero image** on the Home page, replace the `src` of the
`<img class="hero__bg" ...>` element in
`src/app/pages/home/home.component.html` with your own stadium photo
(recommended size: ~1600×900px or larger, landscape).

---

## 🌀 Scroll Reveal Transitions

Every page uses a shared `appScrollReveal` directive
(`src/app/shared/scroll-reveal/scroll-reveal.directive.ts`) to fade and
slide content into view as the user scrolls.

- **Usage in templates:**
  ```html
  <div appScrollReveal>Fades + slides up (default)</div>
  <div appScrollReveal="left">Slides in from the left</div>
  <div appScrollReveal="right">Slides in from the right</div>
  <div appScrollReveal="scale">Fades + scales in</div>

  <!-- staggered list/grid items -->
  <article *ngFor="let item of items; let i = index"
           appScrollReveal
           [revealDelay]="i * 100">
    ...
  </article>
  ```
- It uses `IntersectionObserver` to add an `.is-visible` class once an
  element scrolls into view (each element animates only once).
- The actual transition (opacity + transform) is defined globally in
  `src/styles.scss` under `.reveal`, `.reveal--up/left/right/scale`, and
  `.reveal.is-visible` — tweak durations, easing or distances there.
- Automatically disabled (content shows immediately, no animation) when the
  user has **"reduce motion"** enabled in their OS, or if
  `IntersectionObserver` isn't available.
- To add it to new content, import `ScrollRevealDirective` into the
  component's standalone `imports` array and add the `appScrollReveal`
  attribute to any element.

---

## 🗺 Updating the Google Map

The Contact page embeds a live Google Map via an iframe in
`src/app/pages/contact/contact.component.html` (`.contact-info__map-frame`).
To point it at your actual academy location:

1. Go to [Google Maps](https://maps.google.com) and search for your
   academy's address (or drop a pin on the exact ground).
2. Click **Share → Embed a map**, copy the `src` URL from the provided
   `<iframe>`, and paste it into the `src` attribute of
   `.contact-info__map-frame` — **or** simply replace the address in the
   existing query-based URL:
   ```
   https://www.google.com/maps?q=YOUR+ACADEMY+NAME,+YOUR+ADDRESS&output=embed
   ```
3. Update the "Get Directions" link and the address text in the same
   section, and the address shown in the footer
   (`src/app/shared/footer/footer.component.html`).

---

## 📰 Customizing the News Ticker

Edit `src/app/shared/news-ticker/news-ticker.component.ts` and update the
`newsItems` array with your latest announcements, results and updates. The
ticker automatically loops continuously and pauses when hovered. Scroll
speed can be adjusted via the `animation-duration` value in
`news-ticker.component.scss` (`.ticker__track`).

---

## 📢 Customizing the Sponsor Ad Rail

Edit `src/app/shared/ad-banner/ad-banner.component.ts` and update the `ads`
array (title, subtitle, tag, image, link). The rail scrolls vertically and
loops continuously, pausing on hover. It is shown as a sticky sidebar on
screens wider than 1080px and hidden on smaller screens to keep the mobile
layout clean — you can re-enable a mobile version (e.g. as a horizontal
strip) by adjusting the media query in `app.component.scss`.

---

## 🎨 Design System

Global design tokens (colors, fonts, spacing) live in `src/styles.scss`:

| Token | Value | Usage |
|---|---|---|
| `--color-pitch` | `#1b4332` | Primary green (pitch/outfield) |
| `--color-ball` | `#b91e2c` | Accent red (CTAs, ticker) |
| `--color-willow` | `#c9a66b` | Secondary accent (willow tan) |
| `--color-navy` | `#0b2545` | Dark sections, scoreboard |
| `--color-cream` | `#f5efe0` | Page background |
| `--font-display` | Anton | Headings |
| `--font-body` | Source Sans 3 | Body text |
| `--font-mono` | Roboto Mono | Scoreboard stats, ticker label, tags |

---

## 📄 License

This project was generated as a starter template for YL Cricket Academy.
You're free to modify, extend and deploy it for your academy's website.
#   y l  
 