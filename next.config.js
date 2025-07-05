// // import type { NextConfig } from "next";

// // const nextConfig: NextConfig = {
// const nextConfig= {
//   /* config options here */
//   reactStrictMode: true,  
//   eslint: {
//     ignoreDuringBuilds: true, //disables ESLint on Vercel build
//   },
// };

// export default nextConfig;


// next.config.js

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  eslint: {
    ignoreDuringBuilds: true, // disables ESLint on Vercel build
  },
};

module.exports = nextConfig;