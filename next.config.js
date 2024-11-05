/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "media.licdn.com", // Add LinkedIn's media domain here
      },
    ],
  },
  experimental: {
    serverActions: true,
  },
};

module.exports = nextConfig;
