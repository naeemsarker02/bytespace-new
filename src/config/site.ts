// Central place for project-wide values.
// Environment-specific values come from environment variables (see .env.example),
// so changing them never means editing components.

export const siteConfig = {
  name: "ByteSpace",
  description:
    "Get access to hundreds of online courses. Unlock your creativity, gain valuable knowledge, and grow your business with ByteSpace.",
  // NEXT_PUBLIC_* variables are inlined at build time.
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000",
} as const;
