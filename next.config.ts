import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/blog/top-10-arabic-yemeni-dishes-leicester",
        destination: "/top-arabic-yemeni-dishes-leicester",
        permanent: true,
      },
      {
        source: "/blog/top-arabic-yemeni-dishes-leicester",
        destination: "/top-arabic-yemeni-dishes-leicester",
        permanent: true,
      },
    ];
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
        pathname: "**",
      },
    ],
  },
};

export default nextConfig;
