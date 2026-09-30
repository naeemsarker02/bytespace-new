import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // Serve AVIF first, WebP as fallback: much smaller than the exported PNG files.
    formats: ["image/avif", "image/webp"],
  },
};

export default nextConfig;
