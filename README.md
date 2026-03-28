# Spec website

Static one-page spec you can customize and deploy from GitHub with Vercel.

## Run locally

Open `index.html` in a browser, or from this folder:

```powershell
npx --yes serve .
```

Then visit the URL shown (often `http://localhost:3000`).

## GitHub

1. Create a new empty repository on [GitHub](https://github.com/new) (no README/license if you will push this folder as the first commit).
2. In PowerShell, from this folder:

```powershell
cd C:\Users\troup\.cursor\spec-website
git remote add origin https://github.com/YOUR_USER/YOUR_REPO.git
git branch -M main
git push -u origin main
```

(If you install [GitHub CLI](https://cli.github.com/), you can use `gh repo create` instead.)

## Vercel

1. Sign in at [vercel.com](https://vercel.com) with GitHub.
2. **Add New Project** → import the GitHub repo.
3. Framework preset: **Other** (static site). Root directory: repo root. Deploy.

Vercel will serve `index.html` automatically. Future pushes to `main` can auto-deploy if you leave that enabled.

### CLI (optional)

From this folder, after `vercel login`:

```powershell
vercel
```

Link the project to your GitHub repo in the Vercel dashboard for continuous deployment, or use `vercel --prod` for manual production deploys.
