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

This repo uses **`output: 'export'`** in `next.config.ts`, so `npm run build` generates a static site in the **`out/`** folder. That works with Vercel even if the project was originally set up for plain HTML.

**Option A — Recommended:** Vercel → **Settings** → **Build & Development Settings**

- **Framework Preset:** **Next.js**
- **Root Directory:** empty
- **Output Directory:** **empty** (Vercel detects static export and uses `out/` automatically)
- **Build Command:** default / empty (`next build`)
- Redeploy.

**Option B — If the preset stays on “Other”:** set **Output Directory** to **`out`**, **Build Command** to **`npm run build`**, **Install Command** to **`npm install`**, then redeploy.

Also ensure **Root Directory** is empty unless the app is in a subfolder.

If `NEXT_PUBLIC_SITE_URL` is set in Vercel, it must be a full URL (e.g. `https://linda-website-navy.vercel.app`). An empty value is OK; a broken value can fail the build.

If Git is not configured yet:

```powershell
git config --global user.name "Your Name"
git config --global user.email "your@email.com"
```
