import type { NextConfig } from "next";
import { PATH_REDIRECTS } from "./src/lib/redirects";

const nextConfig: NextConfig = {
  trailingSlash: true,
  reactStrictMode: true,
  poweredByHeader: false,
  serverExternalPackages: ["gray-matter"],
  images: {
    formats: ["image/avif", "image/webp"],
  },
  async redirects() {
    return PATH_REDIRECTS;
  },
};

export default nextConfig;
