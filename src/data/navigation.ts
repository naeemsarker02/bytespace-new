import type { NavLink } from "@/types";

// The Figma design defines no link targets, so these are our own routing decisions.
export const mainNav: NavLink[] = [
  { label: "Home", href: "/" },
  { label: "Courses", href: "/search" },
  { label: "Creators", href: "/creators/purepearl-studio" },
];

export const authNav: NavLink[] = [
  { label: "Sign In", href: "/login" },
  { label: "Join Us", href: "/register" },
];
