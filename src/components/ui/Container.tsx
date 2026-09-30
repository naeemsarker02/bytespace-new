import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

interface ContainerProps {
  children: ReactNode;
  className?: string;
}

// Centers content in the 1200px column used by the Figma grid.
export default function Container({ children, className }: ContainerProps) {
  return <div className={cn("mx-auto w-full max-w-[1200px] px-5 md:px-8 xl:px-0", className)}>{children}</div>;
}
