/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    serverActions: true,
  },
  images: {
    domains: ["www.themoviedb.org", "assets.nflxext.com"],
  },
};

module.exports = nextConfig
