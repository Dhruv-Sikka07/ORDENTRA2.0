import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  cleanDistDir: false,
  distDir: ".next-local",
  turbopack: {
    root: __dirname,
  },
};

export default nextConfig;
