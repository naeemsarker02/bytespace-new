import Image from "next/image";
import type { Testimonial } from "@/types";

interface TestimonialCardProps {
  testimonial: Testimonial;
}

export default function TestimonialCard({ testimonial }: TestimonialCardProps) {
  return (
    <figure className="flex w-full max-w-[374px] flex-col gap-6 rounded-card bg-white p-6">
      <Image
        src={testimonial.avatar}
        alt={`Photo of ${testimonial.name}`}
        width={80}
        height={80}
        className="size-20 rounded-full object-cover"
      />
      <figcaption>
        <p className="font-heading text-xl leading-[1.2] font-semibold tracking-[-0.2px] text-black">{testimonial.name}</p>
        <p className="text-lg leading-[1.6] text-persian-800">{testimonial.role}</p>
      </figcaption>
      <blockquote className="text-lg leading-[1.6] text-ink-700">{testimonial.quote}</blockquote>
    </figure>
  );
}
