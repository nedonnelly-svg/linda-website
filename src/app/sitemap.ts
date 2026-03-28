import type { MetadataRoute } from "next";
import { getSiteUrl } from "@/lib/site-url";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = getSiteUrl().replace(/\/$/, "");
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
