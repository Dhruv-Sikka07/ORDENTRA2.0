import type { NextConfig } from "next";

const isVercel = process.env.VERCEL === "1";

const nextConfig: NextConfig = {
  ...(isVercel
    ? {}
    : {
        cleanDistDir: false,
        distDir: ".next-local",
      }),
  turbopack: {
    root: __dirname,
  },
};

export default nextConfig;
