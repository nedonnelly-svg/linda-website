/** Production base URL for metadata, sitemap, and JSON-LD. Safe if env vars are missing or invalid. */
export function getSiteUrl(): string {
  const raw = process.env.NEXT_PUBLIC_SITE_URL?.trim();
  if (raw) {
    try {
      const u = new URL(raw);
      return `${u.protocol}//${u.host}`;
    } catch {
      /* ignore invalid */
    }
  }
  const vercel = process.env.VERCEL_URL?.replace(/^https?:\/\//, "").replace(/\/$/, "");
  if (vercel) {
    return `https://${vercel}`;
  }
  // Production canonical domain. The new site is replacing the existing Weebly site at this
  // address, so canonical URLs, sitemap, and JSON-LD should all point here once launched.
  return "https://www.drlindahoffman.com";
}
