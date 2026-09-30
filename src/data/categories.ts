import type { Category } from "@/types";
import { assets } from "./assets";

export const categories: Category[] = [
  { id: "design", label: "Design", icon: assets.categoryIcons.design },
  { id: "development", label: "Development", icon: assets.categoryIcons.development },
  { id: "it-software", label: "IT & Software", icon: assets.categoryIcons.itSoftware },
  { id: "business", label: "Business", icon: assets.categoryIcons.business },
  { id: "marketing", label: "Marketing", icon: assets.categoryIcons.marketing },
  { id: "photography", label: "Photography", icon: assets.categoryIcons.photography },
];
