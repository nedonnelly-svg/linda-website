# Linda website

Next.js site for Dr. Linda Hoffman, PsyD — multi-page structure aligned with [drlindahoffman.com](https://www.drlindahoffman.com). Deploy on Vercel (framework: **Next.js**).

## Run locally

```powershell
cd C:\Users\troup\.cursor\linda-website
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Build

```powershell
npm run build
npm start
```

## Environment (optional)

Set `NEXT_PUBLIC_SITE_URL` to your production URL (e.g. `https://linda-website-navy.vercel.app`) for correct metadata / Open Graph base URL.

## GitHub & Vercel

Connect the repo to Vercel and import as a **Next.js** project. Pushes to `main` trigger deployments.

### If the live site shows only “404 NOT_FOUND”

This usually means the project is still using the **old static-site** settings (from when the repo was only `index.html`).

1. Vercel → your project → **Settings** → **General** → **Build & Development Settings**.
2. **Framework Preset:** set to **Next.js** (not “Other”).
3. **Root Directory:** leave **empty** (unless the app lives in a subfolder).
4. **Output Directory:** leave **empty** — Vercel fills this for Next.js automatically. If it says `out`, `dist`, `public`, or `.`, clear it.
5. **Build Command:** leave default (`next build`) or empty so Vercel auto-detects.
6. Save, then **Deployments** → **⋯** on the latest deploy → **Redeploy** (or push an empty commit).

A screenshot of your Build & Development Settings is enough to confirm if something is still wrong; you don’t need a screenshot of the 404 page itself.

If Git is not configured yet:

```powershell
git config --global user.name "Your Name"
git config --global user.email "your@email.com"
```
