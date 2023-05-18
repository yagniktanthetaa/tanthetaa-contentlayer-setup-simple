const { withContentlayer } = require("next-contentlayer");

/** @type {import('next').NextConfig} */
const nextConfig = {
  // next.config.js
  experimental: {
    appDir: true,
  },
  images: {
    domains: [
      "localhost",
      "192.168.29.41",
      "192.168.29.116",
      "aryabhatt.tanthetaa.com",
      "192.168.29.1337",
    ],
    remotePatterns: [
      {
        hostname: "192.168.29.116",
      },
    ],
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
};

module.exports = withContentlayer(nextConfig);
