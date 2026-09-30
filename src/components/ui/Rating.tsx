import Image from "next/image";
import { assets } from "@/data/assets";

interface RatingProps {
  value: number;
}

export default function Rating({ value }: RatingProps) {
  return (
    <div role="img" className="flex items-center gap-1" aria-label={`Rated ${value} out of 5`}>
      <span className="text-lg leading-[1.6] text-ink-700">{value}</span>
      <Image src={assets.icons.star} alt="" width={24} height={24} />
    </div>
  );
}
