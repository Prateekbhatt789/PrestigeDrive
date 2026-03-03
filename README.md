# LUXDRIVE — Premium Car Rental Website

A premium, static multi-page car rental website built with pure HTML, CSS, and vanilla JavaScript.
Black + yellow luxury aesthetic targeting business travellers and tourists.

## Project Structure

```
car-rental-website/
│
├── index.html          ← Homepage (hero, fleet preview, testimonials, CTA)
├── fleet.html          ← Full fleet with sort + category filter
├── pricing.html        ← Pricing tiers + add-ons + daily/weekly toggle
├── terms.html          ← Terms, Privacy Policy, Cancellation Policy (tabs)
├── contact.html        ← Contact form + WhatsApp quick-links + info
│
├── css/
│   └── style.css       ← All global styles (variables, nav, cards, responsive)
│
├── js/
│   └── fleet.js        ← Car data, SVG generator, filter logic, cursor, scroll reveal
│
└── assets/
    ├── images/         ← Drop real car images here (replace SVG illustrations)
    └── icons/
        └── favicon.svg ← Site favicon
```

## Features

- **Custom Cursor** — magnetic dot + ring effect, expands on hover
- **Animated Hero** — floating SVG car illustration with grid background
- **JS Filter System** — filter fleet by category; sort by price or power
- **WhatsApp Booking** — car-specific pre-filled WA links on every card
- **Floating WA Button** — pulsing green button, hides near CTA section
- **Scroll Reveal** — IntersectionObserver fade-in on all sections
- **Pricing Toggle** — switch between daily and weekly rates
- **Tab System** — Terms page with 3 switchable legal sections
- **Contact Form** — with success state simulation
- **Mobile-First Responsive** — hamburger drawer nav, stacked layouts

## Customisation

### Change WhatsApp Number
Search and replace `1234567890` across all files with your actual WhatsApp number.

### Add Real Car Images
Place images in `assets/images/` and update `buildCard()` in `fleet.js`:
```js
// Replace carSVG(c) with:
`<img src="assets/images/${c.id}.jpg" class="car-icon" alt="${c.name}">`
```

### Add/Edit Cars
Edit the `CARS` array in `js/fleet.js`. Each car object accepts:
```js
{
  id, category, name, model,
  price, priceWeek,
  seats, speed, power, trans,
  badge,     // optional label (e.g. "Most Popular")
  ac,        // accent colour for SVG wheels/windows
  bc         // body colour for SVG car body
}
```

### Embed Google Maps (Contact Page)
Replace the `.map-placeholder` div in `contact.html` with your Google Maps embed iframe.

## Deployment
This is a static site — deploy directly to:
- **GitHub Pages** — push to a repo, enable Pages in settings
- **Netlify** — drag and drop the folder
- **Vercel** — connect repo or use CLI

No build step required. No dependencies. No frameworks.

---
&copy; 2026 LuxDrive Premium Rentals
