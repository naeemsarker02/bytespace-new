import type { Course } from "@/types";
import { courses } from "./courses";

// Search page: the design shows 18 cards per page and 5 pages. There is no backend,
// so the six sample courses are repeated to fill 5 pages (5 x 18 = 90 items).
export const searchPageSize = 18;
export const catalog: Course[] = Array.from({ length: searchPageSize * 5 }, (_, index) => courses[index % courses.length]);

export const searchChips = [
  "Featured",
  "Music",
  "Drawing & Painting",
  "Marketing",
  "Animation",
  "Social Media",
  "UI/UX Design",
  "Creative Marketing",
  "Cooking",
];

export const toolbarFilters = [
  { label: "Filter", icon: "filter" },
  { label: "Level", icon: "level" },
  { label: "Category", icon: "category" },
] as const;

export const sortLabel = "Most relevant";
