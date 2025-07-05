import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactStrictMode: true,  
  eslint: {
    ignoreDuringBuilds: true, //disables ESLint on Vercel build
  },
};

export default nextConfig;