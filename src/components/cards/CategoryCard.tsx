import Image from "next/image";
import type { Category } from "@/types";

interface CategoryCardProps {
  category: Category;
}

// Categories_Card_1 in Figma: 167 x 167, lime circle with icon, label below.
export default function CategoryCard({ category }: CategoryCardProps) {
  return (
    <li className="flex size-[167px] flex-col items-center justify-center gap-3 rounded-card border border-shuttle-200">
      <span className="flex items-center justify-center rounded-icon bg-electric-400 p-3">
        <Image src={category.icon} alt="" width={36} height={36} />
      </span>
      <span className="text-xl leading-[1.2] font-medium whitespace-nowrap text-shuttle-950">{category.label}</span>
    </li>
  );
}
