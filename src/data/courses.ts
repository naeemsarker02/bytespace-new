import type { Course } from "@/types";
import { assets } from "./assets";

// Values that are identical on every card in the design.
const shared = {
  author: "purepearl studio",
  lessons: "17 Lessons",
  duration: "2 hours 16 mins",
  comments: "59 Comments",
  level: "Beginner",
  rating: 4.5,
  price: "$25",
  priceSuffix: "/lifetime",
  enrolled: "26+",
  avatars: assets.cardAvatars,
};

export const courses: Course[] = [
  { id: "learn-figma", title: "Learn Figma from Basic", image: assets.courses[0], ...shared },
  { id: "digital-asset", title: "Build Digital Asset", image: assets.courses[1], ...shared },
  { id: "big-data", title: "the Power of Big Data", image: assets.courses[2], ...shared },
  { id: "productivity", title: "Balancing Productivity and Self-Care", image: assets.courses[3], ...shared },
  { id: "money", title: "Mastering Money Management", image: assets.courses[4], ...shared },
  { id: "startup", title: "From Idea to Startup Success", image: assets.courses[5], ...shared },
];

// Filter chips, grouped in the three rows shown in the design.
export const chipRows: string[][] = [
  ["Featured", "Music", "Drawing & Painting", "Marketing", "Animation", "Social Media", "UI/UX Design", "Creative Marketing"],
  ["Digital Illustration", "Film & Video", "Crafts", "Freelance & Entrepreneurship", "Graphic Design", "Photography"],
  ["Productivity", "Web Development", "Data Science", "Cooking"],
];

export const defaultChip = "Featured";
export const moreChipsLabel = "+ More";
