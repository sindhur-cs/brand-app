import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "*",
        port: "",
      },
    ],
  },
  env: {
    NEXT_PUBLIC_BASE_BACKEND_URL: process.env.NEXT_PUBLIC_BASE_BACKEND_URL,
    NEXT_PUBLIC_STACK_API_KEY: process.env.NEXT_PUBLIC_STACK_API_KEY,
    NEXT_PUBLIC_DELIVERY_TOKEN: process.env.NEXT_PUBLIC_DELIVERY_TOKEN,
    NEXT_PUBLIC_PREVIEW_TOKEN: process.env.NEXT_PUBLIC_PREVIEW_TOKEN,
    NEXT_PUBLIC_CONTENTSTACK_REGION:
      process.env.NEXT_PUBLIC_CONTENTSTACK_REGION,
    NEXT_PUBLIC_CONTENTSTACK_ENVIRONMENT:
      process.env.NEXT_PUBLIC_CONTENTSTACK_ENVIRONMENT,
  },
};

export default nextConfig;
