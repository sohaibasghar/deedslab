import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    agentFeedback: true,
  },
  cacheComponents: true,
  // Articles and legal pages are read from markdown at build time; ship the files too.
  outputFileTracingIncludes: {
    "/insights/**": ["./content/insights/*.md"],
    "/privacy": ["./content/legal/*.md"],
    "/terms": ["./content/legal/*.md"],
    "/sitemap.xml": ["./content/insights/*.md"],
  },
  partialPrefetching: true,
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
  // The original site served the same pages at these older paths.
  async redirects() {
    return [
      { source: "/pricing", destination: "/services", permanent: true },
      { source: "/work", destination: "/projects", permanent: true },
    ];
  },
};

export default nextConfig;
