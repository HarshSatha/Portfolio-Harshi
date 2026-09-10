# Harsshita Sathasivam — Portfolio

A personal portfolio site built with React + Vite: dark theme, cyan/violet neon
accents, timeline-based experience section, project grid, skills, awards,
certifications, education, and a contact section — all sourced from a single
content file (`src/data.js`) so it's easy to update later.

## Run it locally

```bash
npm install
npm run dev
```

Then open the local URL Vite prints (usually `http://localhost:5173`).

## Build for production

```bash
npm run build
npm run preview   # optional: preview the production build locally
```

The static site is generated into `dist/`.

## Before you publish

1. Open `src/data.js` and replace the placeholder `linkedin` and `github` URLs
   in the `profile` object with your real profile links.
2. Double-check contact details (email/phone) are the ones you want public.

## Deploying

### GitHub Pages
1. Push this project to a GitHub repository.
2. In `vite.config.js`, set `base: '/your-repo-name/'` (skip this if the repo
   is named `<your-username>.github.io`).
3. Easiest path: install `gh-pages` (`npm i -D gh-pages`), add a `deploy`
   script (`"deploy": "vite build && gh-pages -d dist"`), then run
   `npm run deploy`. Alternatively use a GitHub Actions workflow that runs
   `npm run build` and publishes `dist/` to the `gh-pages` branch.
4. Enable GitHub Pages in the repo settings, pointing at the `gh-pages`
   branch.

### Vercel / Netlify
Import the GitHub repo directly — both detect Vite automatically.
Build command: `npm run build`. Output directory: `dist`.

## Project structure

```
├── index.html
├── src/
│   ├── main.jsx          # React entry point
│   ├── App.jsx            # Assembles all sections
│   ├── index.css          # Design tokens + all styles
│   ├── data.js             # ← All resume content lives here
│   ├── assets/
│   │   └── harsshita.jpg   # Profile photo
│   └── components/
│       ├── Nav.jsx
│       ├── Hero.jsx
│       ├── About.jsx
│       ├── Experience.jsx
│       ├── Projects.jsx
│       ├── Skills.jsx
│       ├── Awards.jsx
│       ├── Certifications.jsx
│       ├── Education.jsx
│       └── Contact.jsx
```

To update any content (a new job, a new award, a fixed typo), edit
`src/data.js` — the components render straight from it.
