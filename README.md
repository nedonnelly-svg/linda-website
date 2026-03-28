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

This repo uses **`output: 'export'`** (see `next.config.ts`). `npm run build` writes the live site to **`out/`**.

**`vercel.json` in the repo** pins Vercel to:

- **Framework:** `null` (“Other”) so deployment is **static files from `out/`**, not a mis-detected preset.
- **`outputDirectory`: `out`** (overrides wrong values in the dashboard).
- **`buildCommand` / `installCommand`** so the build always runs.

After pushing, trigger a **Redeploy** on Vercel. You can still switch the dashboard to **Next.js** later if you remove static export — until then, rely on `vercel.json`.

If `NEXT_PUBLIC_SITE_URL` is set in Vercel, use a full URL (e.g. `https://linda-website-navy.vercel.app`); empty is fine.

If Git is not configured yet:

```powershell
git config --global user.name "Your Name"
git config --global user.email "your@email.com"
```
