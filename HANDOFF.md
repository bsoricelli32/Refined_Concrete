# Refined Concrete — Client Site Handoff

> Items left blank or marked **TODO** still need information from the client or a step that has not happened yet (domain, form service, launch).

## 1. Project overview

**Project name**

Refined Concrete website.

**Short description**

Marketing website for Refined Concrete, a family-owned concrete and flatwork contractor based in Moundridge, Kansas, serving central Kansas. The site introduces the company, shows the work, and drives quote requests and phone calls.

**Goals**

- Primary goal: generate leads (phone calls + quote-form submissions).
- Secondary goals: show the portfolio (gallery + before/after), build trust (reviews, contractors, "since 2012").

**Status**

Not launched yet. Launch target: end of July 2026.
Launched and live as of: **TODO `YYYY-MM-DD`**.

---

## 2. Live site and environments

**Live site URL**

- Production: **TODO** (intended domain `https://refinedconcretellc.com` — confirm DNS is pointed at Vercel).

**Preview links**

- Vercel generates a preview URL automatically for every push / pull request, so you can review a change before it goes live.

---

## 3. Where your site lives

**Code repository**

- Platform: GitHub
- Repo: `github.com/bsoricelli32/Refined_Concrete`
- Main branch: `main` (this is what Vercel deploys to the live site).

**Hosting and deployment**

- Platform: Vercel
- Project: **TODO (Vercel project name)**
- Deployment method: Automatic from GitHub
- Rule: Every push to `main` triggers a new production deployment.
- Routing note: the pages live in the `mockup/` folder; `vercel.json` (repo root) rewrites `/`, `/about.html`, etc. to those files, and `/assets/*` serves the shared assets. In Vercel settings, **Root Directory** must be the repo root and **Framework Preset** must be **Other** (no build step).

---

## 4. How to change content

This is a plain HTML / CSS / JavaScript site (no framework, no build step). You edit the `.html` files directly.

### Option 1
Email me for specific edits or bug fixes (see Section 10).

### Option 2 — edit yourself

**4.1 General editing flow**

1. Open the repo at `github.com/bsoricelli32/Refined_Concrete`.
2. Find the file for the content you want to change (paths below).
3. Edit directly in GitHub.
4. Commit your change.
5. Vercel builds a preview automatically.
6. Review the preview link.
7. Once approved, merge to `main` to update the live site.

**4.2 Editing page text**

| Page | File | Safe to edit | Avoid |
|---|---|---|---|
| Home | `mockup/index.html` | headings, paragraphs, button text | the `<style>` block, `<script>` block, class names |
| About / Our Story | `mockup/about.html` | the story copy, stats, town list | layout/grid CSS |
| Services | `mockup/services.html` | service titles, descriptions, FAQ | the sub-nav `id` values |
| Gallery | `mockup/gallery.html` | captions, before/after labels | the slider/lightbox script |
| Request a Quote | `mockup/quote.html` | intro text, form labels | the `<form>` `action` (see Section 6) |
| 404 | `mockup/404.html` | message text | — |

Note: `index.html` is self-contained (its CSS and JavaScript are inline in the file). The other pages share `assets/css/site.css` and `assets/js/site.js`.

**4.3 Editing navigation and footer**

- **Navigation:** the `<nav>` block near the top of each `.html` file. To add/rename/remove a menu item, change it in **every** page (the nav is repeated per page). Styles: `.site-nav` in `assets/css/site.css`, and inline in `index.html`.
- **Footer:** the `<footer>` block near the bottom of each `.html` file (phone, email, hours, social links, license line). Styles: `.site-footer` in `assets/css/site.css`, and inline in `index.html`.
- After any nav/footer change, check the links on the preview.

---

## 5. Images and media

**5.1 Replacing an image**

1. Go to the `assets/images/` folder in GitHub.
2. Upload a new file **with the same name** to replace an existing image, **or** upload with a new filename and update the `src="../assets/images/..."` reference in the relevant page.
3. Commit and review the Vercel preview.

Key image groups: `hero-1..9.jpg` (homepage hero slideshow + page banners), `gallery-1..7.jpg` (gallery + before/after), `contractors/` (partner logos), `logo-white.png` / `logo.png` (logo), `favicon.png` (browser icon), `about-team.jpg`.

**Recommended formats**

- Photos: `jpg` (or `webp`). Logos/icons: `png` or `svg`.
- Suggested: ~2000px max width, under ~500 KB each. Images already use `loading="lazy"`.

**5.2 Video or embeds**

- None currently. The hero is a CSS background-image slideshow, not video.

---

## 6. Forms and submissions

**Contact / quote form**

- File: `mockup/quote.html` (the `<form class="contact-form">`).
- Service: **Formspree** (placeholder). The form `action` is currently `https://formspree.io/f/REPLACE_ME` and must be replaced with a real Formspree form ID before launch. The form is already Formspree-ready (spam honeypot + email subject line included).
- Notifications go to: **TODO** (the email registered on the Formspree form).

**To make it live**
1. Create a (free) form at formspree.io using the destination email.
2. Replace `REPLACE_ME` in `mockup/quote.html` with the new form ID.
3. Submit a test on the preview, confirm the email arrives, then merge to `main`.

**To update labels or messages**
- Edit the `<label>` text in `mockup/quote.html`, commit, check the preview.

Formspree login email: **TODO**.

---

## 7. Users and access

**GitHub access**

- Owner: `bsoricelli32` (admin).
- Client access: **TODO** (add the client as a collaborator if they want to edit; request via me).

**Vercel access**

- Only I can view and make edits in Vercel.

---

## 8. Deployment behavior

**Automatic deployments**

- Any commit to `main` triggers an automatic production deployment.
- Pull requests get their own preview URL before merging.

**Rollback**

- Vercel keeps previous deployments, so we can roll back to an earlier version if needed (request this from me).

---

## 9. Style guide basics

**Colors**

- Primary blue: `#1A3C6E`
- Mid blue: `#2554A0`
- Accent (bright) blue: `#7DB8E8`
- Background: black `#000000` (panels `#0B0B0B` / `#151515`)
- Body text: `#E6E6E6`; muted gray: `#878787`; white: `#FFFFFF`

(Defined once as CSS variables in `assets/css/site.css` and mirrored in `index.html`.)

**Typography** (Google Fonts)

- Headings: **Playfair Display** (serif, matches the logo)
- Body: **DM Sans**
- Labels / buttons: **Montserrat** (uppercase)

**Key components** (all on the homepage `mockup/index.html` unless noted)

- Hero with rotating service word + "Get a Free Quote" CTA — `#hero`
- Trust strip (Licensed & Insured · Since 2012 · 1,181 Projects · Free Quotes) — `#trust-bar`
- Services grid — `#services` (cards link into `services.html`)
- "Your Project in Three Steps" plan — `#process`
- About teaser — `#about`
- Testimonials (placeholder reviews) — `#testimonials`
- Featured contractors — `#contractors`
- Full-bleed final CTA — `#final-cta`
- Before/after slider + lightbox — `gallery.html` `#beforeafter`
- Mobile sticky Call / Quote bar — `.mobile-cta` (every page)
- Shared nav + footer — `assets/css/site.css`

---

## 10. Support and maintenance

**Included support**

- I will handle bug fixes, small design changes, or basic copy updates for free for the first 15 days after handoff.
- Full copy adjustments, in-depth layout changes, or major redesigns are not included.
- After 15 days, a $300 up-front fee covers a 12-month upkeep and maintenance period.

**How to request changes**

- Email: bsoricelli32@gmail.com
- Typical response time: 2–5 business days

---

## 11. Handoff checklist

- [ ] Final testing completed on all main pages and the quote form
- [ ] All login details shared securely
- [ ] Client has this document and a recording of the walkthrough call
- [ ] Client can edit at least one piece of content on their own
- [ ] Deployment flow explained (GitHub → Vercel)
- [ ] Support and maintenance terms confirmed
- [ ] Client confirms handoff is complete in writing

---

## Outstanding before launch (open TODOs)

- [ ] Point the production domain at Vercel and fill in the live URL + Vercel project name (Sections 2, 3).
- [ ] Create the Formspree form and replace `REPLACE_ME`; set the notification email (Section 6).
- [ ] Replace placeholder content marked `[CLIENT TO PROVIDE]`: real reviews (homepage), the before/after photo pair (gallery), license number and business hours (footer), team member names/photos (About).
- [ ] Confirm final stat numbers (employee/crew count; projects = 1,181 as of 2026-03-24).
- [ ] Update the canonical / Open Graph / sitemap URLs if the final domain differs from `refinedconcretellc.com`.
