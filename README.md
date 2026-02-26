# iprople – Landing Page

Education landing page for **iprople** (Borivali West). Built for 90+ Lighthouse, lead capture, and growth stack integration.

## Quick start

```bash
npm install
npm run dev
```

Open [http://localhost:5173](http://localhost:5173). Production build: `npm run build` → `npm run preview`.

## What’s included

- **Hero** – Full-height hero, tagline, CTAs, lead form above the fold (desktop), Lottie placeholder, parallax, scroll indicator
- **Lead form** – Name, city, phone (validated), optional child age & visit date; success state; posts to `/api/lead` (replace with your backend/CRM)
- **Location** – Google Map embed + optional map-pin Lottie
- **Why iprople** – 3 scroll-animated cards
- **Impact** – Scroll-triggered count-up counters
- **Experience** – Horizontal scroll (desktop) / vertical stack (mobile) with Lottie placeholders
- **Testimonials** – Speech-bubble cards (no photos)
- **Demo booking** – Modal with Calendly embed (replace URL in `src/components/DemoBooking.tsx`)
- **WhatsApp** – Floating button with prefilled message
- **Footer** – Dark navy, links, graduation-cap Lottie placeholder
- **Brutal Truth** – Conversion copy section
- **Analytics** – DataLayer events (lead submit, demo booking, WhatsApp click, CTA clicks, scroll depth 25/50/75/100%)
- **SEO** – JSON-LD LocalBusiness + FAQ, meta description/keywords

## Configure

1. **WhatsApp** – `src/lib/constants.ts`: set `whatsappNumber` (e.g. `919876543210`) and `whatsappMessage`.
2. **Calendly** – `src/components/DemoBooking.tsx`: set `CALENDLY_EMBED_URL` to your Calendly link.
3. **Analytics** – `index.html`: replace `GTM-XXXXXXX`, `G-XXXXXXXXXX`, and `YOUR_PIXEL_ID` with your Google Tag Manager, GA4, and Meta Pixel IDs.
4. **Lead backend** – Form submits to `POST /api/lead`. Point this to your API or CRM (e.g. Zapier, Make, custom backend). Optionally trigger WhatsApp/email from there.
5. **Lottie** – Add JSON files under `public/animations/` (see `public/animations/README.md`). If missing, placeholders are used.
6. **Contact/address** – Update phone and Instagram in `src/lib/constants.ts` and `src/components/SeoSchema.tsx`.

## Performance

- Lottie loaded lazily; layout uses placeholders to avoid CLS.
- Smooth scroll, mobile-first, sticky blurred header.
- Chunk splitting for lottie-react and form libs.

## Tech

- Vite, React 18, TypeScript
- Tailwind CSS, Framer Motion
- react-hook-form, Zod, lottie-react
- react-intersection-observer for scroll triggers
