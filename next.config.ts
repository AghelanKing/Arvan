import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.pexels.com",
      },
    ],
    dangerouslyAllowLocalIP: true,
  },
  cacheComponents: true,
};

export default nextConfig;
