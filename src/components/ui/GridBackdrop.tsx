import Image from "next/image";
import { assets } from "@/data/assets";

// The faint white grid lines drawn over every blue hero. The parent must be `relative`.
export default function GridBackdrop() {
  return (
    <Image
      src={assets.backgrounds.grid}
      alt=""
      fill
      priority
      sizes="100vw"
      className="pointer-events-none object-cover object-top"
    />
  );
}
