# Accelerate Marketing – Free Tools

A small static site (plain HTML, CSS and a little JavaScript, no build step) with Accelerate Marketing's free lead tools:

- `/` – the free-tools hub (links to every tool, guide and training)
- `/lead-leak-score` – the 8-question Lead Leak Score quiz
- `/lead-calculator` – the Lost Lead Calculator

## Editing
- Hub cards and links: `index.html`
- Quiz questions, answers, tips and score labels: the `QUESTIONS` and `LABELS` lists at the bottom of `lead-leak-score/index.html`
- Colors and fonts: the top of `styles.css`

## Forms
The quiz's "Email me my results" form uses Netlify Forms (form name `lead-leak-score`). Submissions show in the Netlify project under Forms.

## Hosting
Deployed on Netlify as its own project, with `accelerate-tools` as the base folder. No build command. Free.
