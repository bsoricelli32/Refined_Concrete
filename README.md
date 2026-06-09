# Refined Concrete — Website

Marketing website for Refined Concrete, a concrete and flatwork contractor in central Kansas.

## Stack

Plain HTML, CSS, and vanilla JavaScript. No framework and no build step — static files that deploy to any standard host (Netlify, Hostinger, etc.).

## Pages

| File | Page |
|---|---|
| `mockup/index.html` | Home |
| `mockup/about.html` | About / Our Story |
| `mockup/services.html` | Services |
| `mockup/gallery.html` | Gallery (lightbox + before/after slider) |
| `mockup/quote.html` | Request a Quote |
| `mockup/404.html` | Not Found |

## Structure

```
assets/
  css/site.css     # shared styles: tokens, nav, footer, buttons
  js/site.js       # shared behavior: nav, scroll reveal, skeletons
  images/          # photos, logos, favicon
mockup/            # site pages
```

`index.html` is self-contained (inline CSS/JS). The subpages share `assets/css/site.css` and `assets/js/site.js`, so nav/footer changes must be made in both places.

## Local preview

Serve from the project root so the `../assets/...` paths resolve:

```bash
python3 -m http.server 8000
# then open http://localhost:8000/mockup/index.html
```

## Design

Dark theme with a blue accent. Playfair Display headings, DM Sans body, Montserrat labels. Mobile-first, responsive at 375 / 768 / 1024 / 1440px.

## Before launch

- Swap the contact form's Formspree placeholder action for a real endpoint.
- Replace the remaining `[CLIENT TO PROVIDE]` placeholders (reviews, license number, hours, before/after photo pair).
- Confirm the production domain and update the canonical / Open Graph / sitemap URLs.
