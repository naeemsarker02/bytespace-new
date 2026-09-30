import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

interface FloatingCardProps {
  children: ReactNode;
  variant?: "white" | "blue";
  className?: string;
}

// The small glass-like info cards floating over the illustrations.
export default function FloatingCard({ children, variant = "white", className }: FloatingCardProps) {
  return (
    <div
      className={cn(
        "rounded-float p-4 backdrop-blur-[10px]",
        variant === "white" ? "bg-white" : "bg-persian-800 text-shuttle-50",
        className,
      )}
    >
      {children}
    </div>
  );
}
