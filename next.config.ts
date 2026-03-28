import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Static HTML export → deploy from the `out/` folder. Works on Vercel even when the project
  // Framework Preset is still set to "Other" (common after migrating from a plain HTML site).
  output: "export",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
