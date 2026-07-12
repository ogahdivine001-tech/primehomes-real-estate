# PrimeHomes Real Estate — Website

A premium, production-ready luxury real estate website built with React, Vite,
Framer Motion, and SwiperJS.

## 🚀 Getting Started

**Requirements:** [Node.js](https://nodejs.org) v18 or higher.

```bash
# 1. Install dependencies
npm install

# 2. Start the dev server
npm run dev
```

The site will open automatically at **http://localhost:5173**.

Other useful commands:

```bash
npm run build     # Production build -> /dist
npm run preview   # Preview the production build locally
npm run lint      # Run ESLint
```

## 📁 Project Structure

```
src/
├── assets/           # Images, icons, videos (see checklist below)
├── components/
│   ├── layout/       # Header, Footer, MobileMenu
│   ├── ui/           # Button, SectionTitle, Stats, Accordion, Lightbox...
│   ├── property/     # PropertyCard, PropertyGrid, PropertyFilterBar
│   ├── agent/         # AgentCard, AgentGrid
│   ├── blog/          # BlogCard
│   ├── sections/      # All 18 homepage sections
│   └── common/         # SEO, ScrollManager, LoadingScreen, BackToTop, WhatsAppButton
├── pages/               # All 16 routed pages
├── layouts/              # MainLayout (Header + Footer wrapper)
├── context/               # ThemeContext (dark mode), FavoritesContext (saved properties)
├── hooks/                  # useScrollPosition, useCountUp
├── data/                    # All sample content (properties, agents, blog posts, etc.)
├── utils/                    # formatPrice, filterProperties, sortProperties
├── App.jsx
└── main.jsx
```

## 🖼️ Image & Video Assets Needed

This project ships **fully functional with placeholder image paths** — every
layout, animation, and interaction works today. To bring it to life visually,
add real photos/video at these exact paths (same filenames = zero code changes):

| Location | Path | Notes |
|---|---|---|
| Hero background | `src/assets/images/hero-bg.jpg` | 1920×1080+, luxury exterior at dusk |
| About section photo | `src/assets/images/about-office.jpg` | Office or leadership photo |
| Founder photo | `src/assets/images/agents/founder.jpg` | Small square headshot |
| About page hero | `src/assets/images/about-hero.jpg` | Wide banner image |
| Video poster | `src/assets/images/video-poster.jpg` | Background still for Video section |
| Video file | `src/assets/videos/company-intro.mp4` | Brand story video |
| Property photos | `src/assets/images/properties/*.jpg` | See filenames in `src/data/properties.js` |
| Agent photos | `src/assets/images/agents/*.jpg` | See filenames in `src/data/agents.js` |
| Location photos | `src/assets/images/locations/*.jpg` | See filenames in `src/data/locations.js` |
| Gallery photos | `src/assets/images/gallery/gallery-1.jpg` … `gallery-8.jpg` | Interiors/exteriors |
| Blog post images | `src/assets/images/blog/*.jpg` | See filenames in `src/data/blogPosts.js` |
| Testimonial avatars | `src/assets/images/testimonials/*.jpg` | See filenames in `src/data/testimonials.js` |

Until real images are added, sections render with elegant navy gradient
placeholders (no broken-image icons), so the site looks intentional at every step.

## 🏠 Adding Listings (Content Management)

This site is connected to **Sanity**, a headless CMS, so real estate agents
can add, edit, or remove property listings and agent profiles themselves —
**no code, no developer needed** for day-to-day updates.

- **Full setup walkthrough:** see `studio/README.md`
- **Until you set it up:** the site runs perfectly fine on the built-in sample
  data in `src/data/` — nothing is broken by skipping this step
- **Once connected:** agents log into a hosted dashboard, fill out a form,
  upload photos, and click Publish — the new listing appears on the live
  site within seconds

## ⚙️ Before Going Live

- [ ] Set up Sanity (see `studio/README.md`) so agents can manage listings themselves
- [ ] Add real images/video (see table above — only needed for the sections not yet managed via Sanity)
- [ ] Update the WhatsApp number in `src/components/common/WhatsAppButton.jsx`
- [ ] Wire the Contact/Newsletter/Property inquiry forms to a real backend or
      email service (currently client-side only — see the `handleSubmit`
      functions in `ContactSection.jsx`, `Newsletter.jsx`, `Contact.jsx`,
      `PropertyDetails.jsx`)
- [ ] Replace placeholder phone numbers, addresses, and emails throughout
      `src/data/` with real business details
- [ ] Have Privacy Policy / Terms pages reviewed by an attorney
- [ ] Update `index.html` canonical URL and Open Graph image once deployed
- [ ] Update `public/sitemap.xml` and `public/robots.txt` with your real domain

## 🌐 Deployment

Includes ready-to-use SPA routing config for:
- **Netlify** — `public/_redirects`
- **Vercel** — `vercel.json`

Both ensure client-side routes (e.g. `/properties`) work correctly on direct
load/refresh, not just in-app navigation.

## ✨ Features

Dark mode · Smooth scroll · Scroll-triggered animations · Lazy-loaded images ·
Loading screen · Floating WhatsApp button · Back-to-top button · Google Maps
embeds · Property search/filter/sort · Save & share properties (persisted
locally) · Fully responsive · Accessible (skip links, focus states, ARIA,
keyboard navigation) · SEO-ready (meta tags, JSON-LD, sitemap)
