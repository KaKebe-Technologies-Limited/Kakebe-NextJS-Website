import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',      // This creates the 'out' folder
  images: {
    unoptimized: true,   // Essential: Standard Next.js image optimization needs a Node server
  },
  /* Any other config options you already have go here */
};

export default nextConfig;