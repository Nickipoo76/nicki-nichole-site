# PRD — Nicki Nichole Personal Brand Website

## Original problem statement
Build a fast, mobile-first, accessible personal brand site for Nicki Nichole (Nichole Paul), Seattle-based marketer / real estate pro / business builder, for nickinichole.com. Static React site, no database/login/paid services, deploys to Netlify. All copy in one editable file (`src/content.js`). One long homepage (9 sections in a set order) plus a separate About page, Netlify Forms contact with `?topic=` preset, SEO meta + OG, README for editing/deploying, push to GitHub repo `nicki-nichole-site`.

## User personas
1. Business owners (tax pros, real estate agents) who may hire for marketing — primary audience.
2. Hiring teams considering her in-house.
3. People needing other services: as-is home sales, deal funding, tax prep, new business setup.

## Architecture
- React 19 (CRA/craco) static SPA in `/app/frontend`; no backend used.
- `src/content.js` — single source of truth for all copy/links/stats.
- `src/components/` — Nav, Hero, ProofStrip, WhoIHelp, Services, WhyFaster, Proof, MoreWays, WorkWithMe, Monroe, ContactForm, Footer, SmartImage.
- `src/pages/` — Home, About, Privacy.
- framer-motion (reveals, masked hero headline), lenis (smooth scroll, disabled under prefers-reduced-motion).
- Netlify: `netlify.toml` (base `frontend`, build `yarn build`, publish `frontend/build`), `public/_redirects` SPA fallback, hidden build-time form registration in `index.html`.
- Images via `public/images/` (headshot-main.jpg, monroe.jpg, og-image.jpg) with branded placeholders until committed.

## Implemented (2026-07)
- Full homepage, all 9 sections in the specified order, with all copy from the brief.
- About page with story, credentials line, CTA back to contact; simple Privacy page.
- Netlify Forms contact (honeypot, success state, error state) with `?topic=` URL preset wired to all in-page links.
- Real values: booking https://getacceleratemarketing.com/freescan, taxes https://acceleratetaxandcredit.com, email support@iconicho.com, LinkedIn https://www.linkedin.com/in/nicholepaul, hiring text "Open to marketing consultant roles."
- Design: plum #3B1F3A / cream #FAF6F0 / gold #C9A227 / blush #F3D9D6, Fraunces + Inter, gold underline accents, masked hero reveal, slow marquee proof strip, parallax hero/why-faster, grain overlay, SVG monogram favicon.
- SEO: title, description, canonical, OG/Twitter tags, Person JSON-LD, WCAG AA contrast, skip link, alt text, focus states, reduced-motion support.
- README with edit/photos/deploy instructions.

## Backlog / remaining
- P0: Push to GitHub repo `nicki-nichole-site` (needs the user's GitHub integration connected in Emergent) and Netlify deploy + domain.
- P0: User commits real `headshot-main.jpg`, `monroe.jpg`, `og-image.jpg` to `public/images/`.
- P1: Testimonials once approved (placeholder note in content.js).
- P1: Lighthouse audit on the deployed Netlify URL.
- P2: Test form submissions end-to-end on Netlify (Forms only registers on a real Netlify deploy).
