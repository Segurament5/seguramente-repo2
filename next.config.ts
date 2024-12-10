import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: ["/public/images"],
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
};

export default nextConfig;
