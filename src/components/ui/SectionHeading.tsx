import { cn } from "@/lib/cn";

interface SectionHeadingProps {
  title: string;
  description: string;
  size?: "large" | "medium"; // large = 44px title, medium = 36px title (desktop sizes)
  titleClassName?: string;
}

const titleSizes = {
  large: "text-3xl md:text-[44px] tracking-[-0.44px]",
  medium: "text-3xl md:text-4xl tracking-[-0.36px]",
};

// Centered heading + intro paragraph used by the courses and categories sections.
export default function SectionHeading({ title, description, size = "large", titleClassName }: SectionHeadingProps) {
  return (
    <div className="mx-auto flex max-w-[917px] flex-col items-center gap-4 text-center">
      <h2 className={cn("font-heading leading-[1.2] font-semibold text-shuttle-950", titleSizes[size], titleClassName)}>
        {title}
      </h2>
      <p className="text-lg leading-[1.6] text-shuttle-700">{description}</p>
    </div>
  );
}
