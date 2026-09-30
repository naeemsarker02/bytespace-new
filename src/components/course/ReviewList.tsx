"use client";

import { useState } from "react";
import ReviewCard from "@/components/course/ReviewCard";
import Icon from "@/components/ui/icons";
import { ratingFilters, reviews } from "@/data/reviews";
import { cn } from "@/lib/cn";

const chip =
  "inline-flex h-12 items-center gap-2 rounded-card px-4 text-base leading-[1.2] font-medium transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-persian-800";

// Client Component: it keeps the selected star filter (null = all ratings).
export default function ReviewList() {
  const [stars, setStars] = useState<number | null>(null);
  const visible = stars === null ? reviews : reviews.filter((review) => review.rating === stars);

  return (
    <div>
      <div className="flex flex-wrap justify-center gap-4 xl:justify-start" role="group" aria-label="Filter reviews by rating">
        <button
          type="button"
          aria-pressed={stars === null}
          onClick={() => setStars(null)}
          className={cn(chip, stars === null ? "bg-electric-400 text-shuttle-950" : "bg-shuttle-50 text-shuttle-700 hover:bg-shuttle-100")}
        >
          All rating
        </button>
        {ratingFilters.map((value) => (
          <button
            key={value}
            type="button"
            aria-pressed={stars === value}
            onClick={() => setStars(value)}
            className={cn(chip, stars === value ? "bg-electric-400 text-shuttle-950" : "bg-shuttle-50 text-shuttle-700 hover:bg-shuttle-100")}
          >
            <Icon name="star" />
            {value}
          </button>
        ))}
      </div>

      {visible.length > 0 ? (
        <ul className="mt-6 flex flex-col gap-6">
          {visible.map((review) => (
            <li key={review.id}>
              <ReviewCard review={review} />
            </li>
          ))}
        </ul>
      ) : (
        <p className="mt-6 text-center text-base leading-[1.6] text-shuttle-600 xl:text-left">No reviews with this rating yet.</p>
      )}
    </div>
  );
}
