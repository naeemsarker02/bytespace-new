import type { NavLink } from "@/types";

// The Figma design defines no link targets, so "Courses" and "Creators" scroll
// to the matching sections of the landing page and the auth links are placeholders.
export const mainNav: NavLink[] = [
  { label: "Home", href: "/" },
  { label: "Courses", href: "#courses" },
  { label: "Creators", href: "#creators" },
];

export const authNav: NavLink[] = [
  { label: "Sign In", href: "#" },
  { label: "Join Us", href: "#" },
];
