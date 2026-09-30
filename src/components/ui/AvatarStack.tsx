import Image from "next/image";

interface AvatarStackProps {
  avatars: string[];
  size: number; // avatar diameter in px
  overlap: number; // how many px each avatar overlaps the previous one
  extra?: string; // text inside the trailing lime circle, e.g. "26+"
  extraClassName?: string;
  extraTone?: "lime" | "dark"; // background of the "+N" circle
}

// Overlapping round avatars followed by a lime "+N" circle.
export default function AvatarStack({ avatars, size, overlap, extra, extraClassName, extraTone = "lime" }: AvatarStackProps) {
  return (
    <div className="flex items-center">
      {avatars.map((src) => (
        <span
          key={src}
          className="relative block shrink-0 overflow-hidden rounded-full"
          style={{ width: size, height: size, marginRight: -overlap }}
        >
          <Image src={src} alt="" fill sizes={`${size}px`} className="object-cover" />
        </span>
      ))}
      {extra && (
        <span
          className={`relative flex shrink-0 items-center justify-center rounded-full ${extraTone === "lime" ? "bg-electric-400 text-shuttle-950" : "bg-shuttle-950 text-white"} ${extraClassName ?? ""}`}
          style={{ width: size, height: size }}
        >
          {extra}
        </span>
      )}
    </div>
  );
}
