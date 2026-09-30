import Link from "next/link";
import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

interface ButtonProps {
  children: ReactNode;
  href?: string;
  type?: "button" | "submit";
  variant?: "primary" | "outline"; // primary = lime, outline = white with a border
  size?: "md" | "sm" | "xs";
  className?: string;
  onClick?: () => void;
}

const base =
  "inline-flex items-center justify-center gap-2 rounded-card font-medium whitespace-nowrap transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-electric-600";

const variants = {
  primary: "bg-electric-400 text-shuttle-950 hover:bg-electric-300",
  outline: "border border-shuttle-200 bg-white text-shuttle-950 hover:bg-shuttle-50",
};

const sizes = {
  md: "px-6 py-3 text-lg leading-[1.2]",
  sm: "px-6 py-2 text-base leading-[1.2]",
  xs: "px-4 py-2 text-base leading-[1.2]",
};

// The pill button. With an href it renders a link, otherwise a real <button>.
export default function Button({
  children,
  href,
  type = "button",
  variant = "primary",
  size = "md",
  className,
  onClick,
}: ButtonProps) {
  const classes = cn(base, variants[variant], sizes[size], className);
  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }
  return (
    <button type={type} onClick={onClick} className={classes}>
      {children}
    </button>
  );
}
