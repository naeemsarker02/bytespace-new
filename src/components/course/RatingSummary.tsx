import Icon from "@/components/ui/icons";
import { ratingAverage, ratingBreakdown } from "@/data/reviews";

// Big average on the left, one bar per star level on the right.
export default function RatingSummary() {
  return (
    <div className="flex flex-col items-center gap-8 rounded-float border border-shuttle-200 p-6 sm:flex-row sm:items-center sm:gap-16 sm:p-10">
      <div className="flex h-[136px] w-[129px] shrink-0 flex-col items-center justify-center rounded-float bg-electric-400 text-shuttle-950">
        <p className="text-sm leading-[1.2] font-medium">Ratings</p>
        <p className="font-heading text-4xl leading-[1.2] font-semibold">{ratingAverage}</p>
      </div>
      <ul className="flex w-full flex-1 flex-col gap-1">
        {ratingBreakdown.map((row) => (
          <li key={row.stars} className="flex items-center gap-4">
            <div
              role="img"
              aria-label={`${row.count} reviews with ${row.stars} stars`}
              className="h-2 flex-1 rounded-card bg-shuttle-100 sm:max-w-[282px]"
            >
              <div className="h-full rounded-card bg-electric-400" style={{ width: `${row.percent}%` }} />
            </div>
            <div className="hidden gap-1 text-shuttle-700 sm:flex" aria-hidden="true">
              {Array.from({ length: 5 }, (_, index) => (
                <Icon key={index} name="star" />
              ))}
            </div>
            <span className="w-10 text-right text-base leading-[1.6] text-shuttle-600">{row.count}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
