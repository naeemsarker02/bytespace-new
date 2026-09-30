import Image from "next/image";
import { assets } from "@/data/assets";

// List with the blue check-circle icon (Key Points).
export default function CheckList({ items }: { items: string[] }) {
  return (
    <ul className="flex flex-col gap-3">
      {items.map((item) => (
        <li key={item} className="flex items-center gap-2 text-base leading-[1.6] text-shuttle-600">
          <Image src={assets.icons.check} alt="" width={24} height={24} />
          {item}
        </li>
      ))}
    </ul>
  );
}
