# Nicki Nichole — Personal Brand Website

Static React site for **nickinichole.com**. No database, no login, no paid services. Deploys as a static site on Netlify.

## Edit the text (one file)

All copy on the site lives in **`src/content.js`** — headlines, buttons, stats, cards, links, everything.
Edit the text there and the layout updates by itself. You never need to touch the files in `src/components/` or `src/pages/`.

- Placeholders written like `[SOMETHING]` are hidden automatically until you paste a real value.
- Contact form topics, the proof-strip lines, and the stat tiles are simple lists in that file — add, remove or reorder entries freely.

## Swap the photos

Put final images in **`public/images/`** using exactly these names:

| File | Used for | Notes |
|---|---|---|
| `headshot-main.jpg` | Hero, About page | 355x427 px, shown at max ~420 px wide |
| `monroe.jpg` | "Meet Monroe" section | Keeps the "AI-generated" label automatically |
| `og-image.jpg` | Social share preview | 1200x630 px recommended |

Until a file exists, the site shows a branded placeholder — no broken images. No code changes needed when you add or swap files; just keep the same names.

## Run locally

```bash
yarn install
yarn start
```

## Deploy to Netlify

1. Push this repo to GitHub (repository: `nicki-nichole-site`).
2. In Netlify: **Add new site → Import an existing project → GitHub**, pick the repo.
3. Netlify reads `netlify.toml` automatically:
   - Base directory: `frontend`
   - Build command: `yarn build`
   - Publish directory: `frontend/build`
4. Deploy. The contact form is registered with **Netlify Forms** automatically (submissions appear under Netlify → Forms → `contact`, with optional email notifications).
5. Point `nickinichole.com` at the site under **Domain management** (Netlify provides free HTTPS).

### Contact form notes

- The form posts to Netlify Forms (`data-netlify="true"`, hidden `form-name` field).
- In-page links preset the Topic field via a URL parameter, e.g. `/?topic=selling#contact`. Valid values: `tax`, `real-estate`, `hiring`, `selling`, `funding`, `business`, `other`.

### Lead tools

- `/lead-leak-score` — 8-question quiz (answers score 0–3, total shown out of 100) with a "top 3 leaks" result and an optional email-results capture (Netlify form `lead-leak-score`).
- `/lead-calculator` — lost-lead revenue calculator (leads − clients, win-back toggle 10/20/30%).
- Both are linked in the header, footer, and a band on the homepage after Marketing services. All questions, tips and labels are editable in `src/content.js`.

## Accessibility & performance

- WCAG AA contrast: plum text on gold buttons, plum on cream, cream on plum.
- All images have descriptive alt text; all controls are keyboard-accessible with visible focus states.
- Animations respect `prefers-reduced-motion`.
- Fonts: Fraunces (headlines) + Inter (body) via Google Fonts.
