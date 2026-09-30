import Image from "next/image";
import AvatarStack from "@/components/ui/AvatarStack";
import Rating from "@/components/ui/Rating";
import { assets } from "@/data/assets";
import type { Course } from "@/types";

interface CourseCardProps {
  course: Course;
}

// Course_Card_1 in Figma: 373 x 384, radius 24, 1px border, 15px inner padding.
export default function CourseCard({ course }: CourseCardProps) {
  return (
    <article className="relative h-[384px] w-[373px] max-w-full overflow-hidden rounded-card border border-shuttle-200 bg-white p-[15px]">
      <div className="relative h-[195px] overflow-hidden rounded-image bg-shuttle-200">
        <Image src={course.image} alt={course.title} fill sizes="341px" className="object-cover" />
        <ul className="absolute bottom-[13px] left-[13px] flex gap-3">
          {[course.lessons, course.duration, course.comments].map((text) => (
            <li
              key={text}
              className="rounded-card bg-shuttle-50/60 px-3 py-[6px] text-xs leading-[1.2] font-medium whitespace-nowrap text-ink-700 backdrop-blur-[4px]"
            >
              {text}
            </li>
          ))}
        </ul>
      </div>

      <div className="mt-[21px] flex flex-col gap-4">
        <div className="pr-[60px]">
          <h3
            title={course.title}
            className="truncate font-heading text-xl leading-[1.2] font-semibold tracking-[-0.2px] text-black"
          >
            {course.title}
          </h3>
          <p className="text-xs leading-[1.6] text-ink-700">
            by <span className="text-persian-800">{course.author}</span>
          </p>
        </div>

        <div className="flex items-center gap-3">
          <span className="inline-flex items-center gap-1 rounded-card bg-shuttle-50 px-3 py-[6px] text-xs leading-[1.2] font-medium text-shuttle-700">
            <Image src={assets.icons.signal} alt="" width={20} height={20} />
            {course.level}
          </span>
          <AvatarStack avatars={course.avatars} size={32} overlap={8} extra={course.enrolled} extraClassName="text-xs font-medium" />
        </div>

        <p className="flex items-end">
          <span className="font-heading text-xl leading-[1.2] font-semibold tracking-[-0.2px] text-persian-800">{course.price}</span>
          <span className="text-xs leading-[1.6] text-ink-700">{course.priceSuffix}</span>
        </p>
      </div>

      <div className="absolute top-[231px] right-[14px]">
        <Rating value={course.rating} />
      </div>
    </article>
  );
}
