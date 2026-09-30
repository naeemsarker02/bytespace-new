import { courses } from "@/data/courses";
import type { NavLink } from "@/types";

const link = (label: string, href = "#"): NavLink => ({ label, href });

// Column 1 is built from the course data, so a new course shows up here automatically.
// The Figma design defines no link targets, so these routes are our own decision.
export const footerColumns: NavLink[][] = [
  courses.map((course) => link(course.title, `/courses/${course.id}`)),
  ["Business", "IT", "Design", "Development", "Marketing", "Photography"].map((label) => link(label, "/search")),
  [
    link("Become a Creator", "/register"),
    link("Creators", "/creators/purepearl-studio"),
    link("Find a Course", "/search"),
    link("Sign In", "/login"),
    link("Contact"),
  ],
];

export const legalLinks: NavLink[] = ["Privacy Policy", "Terms of Service", "Cookies Settings"].map((label) => link(label));
