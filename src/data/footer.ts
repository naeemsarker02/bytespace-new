import type { NavLink } from "@/types";

const link = (label: string): NavLink => ({ label, href: "#" });

// Three link columns, as in the design (targets are not defined in Figma).
export const footerColumns: NavLink[][] = [
  ["Featured Courses", "Featured Categories", "Business", "IT", "Design"].map(link),
  ["Development", "Marketing", "Photography", "Finance", "Sport"].map(link),
  ["Become a Creator", "Affiliate Program", "Contact", "Help", "About"].map(link),
];

export const legalLinks: NavLink[] = ["Privacy Policy", "Terms of Service", "Cookies Settings"].map(link);
