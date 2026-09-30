import Image from "next/image";
import Link from "next/link";
import { assets } from "@/data/assets";
import { siteConfig } from "@/config/site";
import { cn } from "@/lib/cn";

interface LogoProps {
  tone?: "light" | "dark"; // light text on the blue hero, dark text on white
}

export default function Logo({ tone = "light" }: LogoProps) {
  return (
    <Link href="/" className="flex items-center gap-2" aria-label={`${siteConfig.name} home`}>
      <Image src={assets.logoMark} alt="" width={29} height={32} priority />
      <span className={cn("font-logo text-2xl font-bold", tone === "light" ? "text-shuttle-50" : "text-shuttle-950")}>
        {siteConfig.name}
      </span>
    </Link>
  );
}
