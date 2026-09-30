import type { RatingBreakdown, Review } from "@/types";
import { assets } from "./assets";

export const ratingAverage = 4.7;

// Bar widths come from the Figma bars (260, 103, 27, 10 and 15 px out of a 282 px track).
export const ratingBreakdown: RatingBreakdown[] = [
  { stars: 5, count: 720, percent: 92 },
  { stars: 4, count: 120, percent: 37 },
  { stars: 3, count: 21, percent: 10 },
  { stars: 2, count: 12, percent: 4 },
  { stars: 1, count: 16, percent: 5 },
];

export const ratingFilters = [5, 4, 3, 2, 1];

const shared = { role: "UI/UX Designer", rating: 5, date: "a year ago" };

export const reviews: Review[] = [
  {
    id: "purepearl",
    name: "PurePearl Studio",
    avatar: assets.reviewerAvatars[0],
    quote:
      "The course provided me with a comprehensive understanding of digital asset creation. The lessons were in-depth, practical, and immediately applicable to my work. Highly recommended!",
    ...shared,
  },
  {
    id: "albert",
    name: "Albert Flores",
    avatar: assets.reviewerAvatars[1],
    quote:
      "This course transformed my approach to digital design. The combination of theory, hands-on exercises, and real-world applications made it a truly enriching experience. Excited to implement what I've learned!",
    ...shared,
  },
  {
    id: "cody",
    name: "Cody Fisher",
    avatar: assets.reviewerAvatars[2],
    quote:
      "The project showcase and critique module created a collaborative environment where I could showcase my work, receive valuable feedback, and refine my skills. It added a unique and valuable dimension to the learning process.",
    ...shared,
  },
  {
    id: "brooklyn",
    name: "Brooklyn Simmons",
    avatar: assets.reviewerAvatars[3],
    quote:
      "The lessons on optimizing digital assets for various platforms were particularly insightful. The course adapts to the evolving digital landscape, and the engaging content kept me motivated throughout.",
    ...shared,
  },
];
