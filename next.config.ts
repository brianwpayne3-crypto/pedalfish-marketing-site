import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  images: { unoptimized: true },
  ...(process.env.NODE_ENV === "development"
    ? {
        rewrites: async () => [
          { source: "/brian", destination: "/brian/index.html" },
          { source: "/brian/", destination: "/brian/index.html" },
          { source: "/brian.css", destination: "/brian/brian.css" },
          { source: "/brian.vcf", destination: "/brian/brian.vcf" },
        ],
      }
    : {}),
};

export default nextConfig;
