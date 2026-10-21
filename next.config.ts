import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    agentFeedback: true,
  },
  cacheComponents: true,
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
