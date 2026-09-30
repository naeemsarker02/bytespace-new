import type { Creator } from "@/types";
import { assets } from "./assets";

export const creators: Creator[] = [
  {
    slug: "purepearl-studio",
    name: "PurePearl Studio",
    role: "Passionate UI/UX, Web designer",
    badge: "Creator",
    avatar: assets.creatorAvatar,
    products: 3,
    followers: 12,
    // The Figma text still had the "[Creator's Name]" placeholder and a cut-off "Dive"; both are fixed here.
    bio: [
      "Welcome to the creative world of PurePearl Studio. Here, you'll discover the passion, expertise, and inspiration that drive my creative journey. Let's explore and learn together!",
      "Dive into my creative portfolio, showcasing a glimpse of my artistic endeavors. From digital designs to multimedia projects, each piece tells a unique story. Explore the world of creativity with me.",
    ],
  },
];

export function getCreator(slug: string): Creator | undefined {
  return creators.find((creator) => creator.slug === slug);
}
