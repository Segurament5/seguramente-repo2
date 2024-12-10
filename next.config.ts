import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: ["/public/images"],
  },
  eslint: {
    ignoreDuringBuilds: true,
  }
};

export default nextConfig;
