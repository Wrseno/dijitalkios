/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    loader: "akamai",
    path: " ",
    domains: ["icons8.com"],
    unoptimized: true,
  },
  assetPrefix: "/",
};

module.exports = nextConfig;
