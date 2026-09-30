import Link from "next/link";
import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

interface ButtonProps {
  children: ReactNode;
  href?: string;
  type?: "button" | "submit";
  className?: string;
}

const styles =
  "inline-flex items-center justify-center rounded-card bg-electric-400 px-6 py-3 text-lg leading-[1.2] font-medium whitespace-nowrap text-shuttle-950 transition-colors hover:bg-electric-300 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-electric-600";

// The lime pill button. With an href it renders a link, otherwise a real <button>.
export default function Button({ children, href, type = "button", className }: ButtonProps) {
  if (href) {
    return (
      <Link href={href} className={cn(styles, className)}>
        {children}
      </Link>
    );
  }
  return (
    <button type={type} className={cn(styles, className)}>
      {children}
    </button>
  );
}
