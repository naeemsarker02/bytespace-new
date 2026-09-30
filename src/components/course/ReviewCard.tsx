import Image from "next/image";
import Icon from "@/components/ui/icons";
import type { Review } from "@/types";

export default function ReviewCard({ review }: { review: Review }) {
  return (
    <article className="rounded-card border border-shuttle-200 bg-white p-6 sm:p-10">
      <header className="flex flex-col items-center gap-3 text-center sm:flex-row sm:items-start sm:justify-between sm:gap-4 sm:text-left">
        <div className="flex flex-col items-center gap-3 sm:flex-row">
          <Image src={review.avatar} alt="" width={52} height={52} className="size-[52px] rounded-full object-cover" />
          <div>
            <h3 className="text-lg leading-[1.2] font-medium text-shuttle-950">{review.name}</h3>
            <p className="text-base leading-[1.6] text-shuttle-500">{review.role}</p>
          </div>
        </div>
        <p className="shrink-0 text-base leading-[1.6] text-shuttle-500">{review.date}</p>
      </header>
      <div role="img" aria-label={`Rated ${review.rating} out of 5`} className="mt-4 flex justify-center gap-1 text-shuttle-700 sm:justify-start">
        {Array.from({ length: review.rating }, (_, index) => (
          <Icon key={index} name="star" />
        ))}
      </div>
      <p className="mt-6 text-center text-base leading-[1.6] text-shuttle-600 sm:text-left">{review.quote}</p>
    </article>
  );
}
