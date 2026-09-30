import Link from "next/link";
import ShareButton from "@/components/course/ShareButton";
import Icon from "@/components/ui/icons";
import type { CourseDetail } from "@/types";

interface CourseHeaderProps {
  course: CourseDetail;
}

// Title, subtitle, author and the three info pills at the top of every course page.
export default function CourseHeader({ course }: CourseHeaderProps) {
  const pills = [
    { icon: "level", text: course.level },
    { icon: "star", text: `${course.rating} (${course.reviewCount} reviews)` },
    { icon: "users", text: `${course.students} Students` },
  ] as const;

  return (
    <div className="flex flex-col gap-6 sm:flex-row sm:items-start sm:justify-between min-[1440px]:-mr-[83px]">
      <div>
        <h1 className="font-heading text-3xl leading-[1.2] font-semibold tracking-[-0.36px] text-white md:text-4xl">
          {course.title}
        </h1>
        <p className="mt-1 font-heading text-lg leading-[1.2] font-medium text-white md:text-xl">{course.subtitle}</p>
        <p className="mt-[30px] text-lg leading-[1.2] text-white">
          by{" "}
          <Link href={`/creators/${course.creator.slug}`} className="text-electric-400 hover:underline">
            {course.author}
          </Link>
        </p>
        <ul className="mt-6 flex flex-wrap gap-4">
          {pills.map((pill) => (
            <li
              key={pill.icon}
              className="inline-flex h-10 items-center gap-2 rounded-card bg-white px-6 text-base leading-[1.2] font-medium text-shuttle-950"
            >
              <Icon name={pill.icon} className="text-persian-800" />
              {pill.text}
            </li>
          ))}
        </ul>
      </div>
      <ShareButton />
    </div>
  );
}
