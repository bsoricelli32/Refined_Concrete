# CLAUDE.md — Refined Concrete Website

## Project Context

Greenfield marketing site for **Refined Concrete**, a small concrete construction company in Moundridge, Kansas. First website, no prior codebase.

**Launch target:** End of July 2026

---

## Stack

Plain HTML + CSS + vanilla JS. No framework, no build tool, no npm. The deliverable is static files a non-technical client can host on any standard hosting provider (e.g., Netlify, Hostinger, Squarespace export, GoDaddy).

---

## Pages

- `index.html` — Home
- `about.html` — Who We Are
- `services.html` — Services
- `gallery.html` — Gallery

---

## Design Rules

- **Colors:** Primary blue (`#1A3C6E` or match client brand file once received), black (`#111111`), white (`#FFFFFF`)
- **Style:** Modern, minimal, clean — no decorative clutter
- **Typography:** One sans-serif font family (e.g., Inter or similar system/Google font)
- **Mobile-first:** All layouts must work on small screens first, then scale up
- Reference feel: https://extconcrete.com/ (overall), https://jm-concrete.com/ (stats section)

---

## Key Sections to Build

1. **Hero** — full-width image/video, headline, two CTAs: "Call Now" + "Get a Quote"
2. **Stats counter** — animated count-up for projects completed and number of employees
3. **Services grid** — Flatwork, Retaining Walls, Laser Screeding, Early Entry Sawcutting, Place & Finish
4. **Gallery** — masonry or grid layout, lightbox on click
5. **Featured Contractors** — logos/names of contractors who use Refined Concrete
6. **Contact form** — Name, phone, email, project description, submit (Formspree or Netlify Forms)
7. **Footer** — phone, email, location, nav links

---

## Visitor Goals (design around these)

1. **Call** — phone number prominent in header and hero
2. **Fill out contact form** — form accessible from nav and CTA buttons
3. **Request a quote** — dedicated CTA throughout the page

---

## Content Status

- Logo: client will provide
- Brand colors: client will provide
- Photos: client will provide
- Written copy: mostly ready from client
- Featured contractors list: pending from client
- Stats numbers (project count, employee count): pending from client

Use placeholder content and `[CLIENT TO PROVIDE]` markers anywhere real assets are missing.

---

## Code Conventions

- No comments explaining what the code does — only comments for non-obvious constraints or workarounds
- No unused CSS classes or JS functions
- Use semantic HTML elements (`<section>`, `<nav>`, `<article>`, `<figure>`)
- Keep the contact form backend-agnostic — use Formspree action URL as a placeholder so the client can swap it
- Image paths: `assets/images/` — use descriptive filenames
- No frameworks, no dependencies beyond a single Google Fonts `<link>`

---

## Working Notes

- Review at key milestones, not every commit
- Maintenance plan is TBD post-launch; don't build anything that requires ongoing paid services without flagging it first

---

## Assets Checklist

Before launch, confirm receipt of:
- [ ] Logo (SVG or high-res PNG)
- [ ] Brand color file
- [ ] All project photos
- [ ] Featured contractor names / logos
- [ ] Final stats numbers
- [ ] "Who We Are" copy finalized
