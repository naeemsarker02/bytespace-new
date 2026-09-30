import Icon from "@/components/ui/icons";

interface RatingProps {
  value: number;
  starClassName?: string; // color of the star, light grey by default
}

export default function Rating({ value, starClassName = "text-shuttle-200" }: RatingProps) {
  return (
    <div role="img" className="flex items-center gap-1" aria-label={`Rated ${value} out of 5`}>
      <span className="text-lg leading-[1.6] text-ink-700">{value}</span>
      <Icon name="star" className={starClassName} />
    </div>
  );
}
