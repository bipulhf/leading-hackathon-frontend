import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async rewrites() {
    return [
      {
        source: "/firebase-messaging-sw.js",
        destination: "/firebase-messaging-sw.js",
      },
    ];
  },
};

export default nextConfig;
