import type { MetadataRoute } from "next";

const DEFAULT_ORIGIN = "https://linda-website-navy.vercel.app";

export default function robots(): MetadataRoute.Robots {
  const base = (process.env.NEXT_PUBLIC_SITE_URL ?? DEFAULT_ORIGIN).replace(/\/$/, "");
  return {
    rules: { userAgent: "*", allow: "/" },
    sitemap: `${base}/sitemap.xml`,
  };
}
