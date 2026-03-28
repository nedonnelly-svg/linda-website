import type { MetadataRoute } from "next";

const DEFAULT_ORIGIN = "https://linda-website-navy.vercel.app";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = (process.env.NEXT_PUBLIC_SITE_URL ?? DEFAULT_ORIGIN).replace(/\/$/, "");
  const paths = [
    "/",
    "/trauma-recovery",
    "/treatment-modalities",
    "/entertainment-industry-professionals",
    "/experience",
    "/faq",
    "/resources-notices",
    "/contact",
  ];

  return paths.map((path) => ({
    url: path === "/" ? base : `${base}${path}`,
    lastModified: new Date(),
    changeFrequency: path === "/" ? ("weekly" as const) : ("monthly" as const),
    priority: path === "/" ? 1 : 0.85,
  }));
}
