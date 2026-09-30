import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import localFont from "next/font/local";
import { siteConfig } from "@/config/site";
import "./globals.css";

// Poppins is not a variable font, so the weights must be listed.
// 500 = Medium (stat numbers), 600 = SemiBold (headings).
const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["500", "600"],
  display: "swap",
});

// Satoshi (body text and labels) is not on Google Fonts, so the files live in src/fonts.
// The path is relative to THIS file. One family, three files: Tailwind's font-normal /
// font-medium / font-bold pick the matching file through the weight value.
const satoshi = localFont({
  variable: "--font-satoshi",
  display: "swap",
  src: [
    { path: "../fonts/Satoshi-Regular.woff2", weight: "400", style: "normal" },
    { path: "../fonts/Satoshi-Medium.woff2", weight: "500", style: "normal" },
    { path: "../fonts/Satoshi-Bold.woff2", weight: "700", style: "normal" },
  ],
});

// Clash Display is only used for the "ByteSpace" wordmark in the logo.
const clashDisplay = localFont({
  variable: "--font-clash",
  display: "swap",
  src: [{ path: "../fonts/ClashDisplay-Bold.woff2", weight: "700", style: "normal" }],
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: `${siteConfig.name} | Online Courses`,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${poppins.variable} ${satoshi.variable} ${clashDisplay.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
