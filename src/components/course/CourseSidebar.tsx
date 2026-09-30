import Image from "next/image";
import Button from "@/components/ui/Button";
import Icon from "@/components/ui/icons";
import type { CourseDetail } from "@/types";

interface CourseSidebarProps {
  course: CourseDetail;
}

// White "Enroll" card on the right of every course page (412 px wide in Figma).
export default function CourseSidebar({ course }: CourseSidebarProps) {
  const { creator } = course;

  return (
    <aside
      aria-label="Enroll in this course"
      className="w-full rounded-card border border-shuttle-200 bg-white p-6 shadow-sm sm:p-10 xl:w-[412px]"
    >
      <h2 className="font-heading text-xl leading-[1.2] font-semibold text-shuttle-950">
        {course.lessonCount} Lessons ({course.hours} hours)
      </h2>
      <ol className="mt-3 flex flex-col gap-3">
        {course.lessonPreview.map((lesson) => (
          <li key={lesson.number} className="flex items-start gap-4 text-base leading-[1.2] text-shuttle-950">
            <span className="w-5 shrink-0">{lesson.number}</span>
            <span className="flex-1">{lesson.title}</span>
            <span className="shrink-0 text-persian-800">{lesson.duration}</span>
          </li>
        ))}
      </ol>
      <p className="mt-3 text-base leading-[1.6] text-shuttle-500">{course.moreVideos} more videos</p>

      <p className="mt-6 text-base leading-[1.6] text-shuttle-500">{course.pitch}</p>
      <p className="mt-3 flex items-end">
        <span className="font-heading text-[32px] leading-[1.2] font-semibold tracking-[-0.32px] text-persian-800">
          {course.price}
        </span>
        <span className="text-base leading-[1.6] text-shuttle-500">{course.priceSuffix}</span>
      </p>
      <Button className="mt-3 w-full">Enroll Now</Button>

      <h3 className="mt-6 font-heading text-xl leading-[1.2] font-semibold text-shuttle-950">This course include</h3>
      <ul className="mt-6 flex flex-col gap-3">
        {course.includes.map((item) => (
          <li key={item.label} className="flex items-center gap-2 text-base leading-[1.6] text-shuttle-500">
            <Icon name={item.icon} className="text-persian-800" />
            {item.label}
          </li>
        ))}
      </ul>

      <hr className="my-6 border-shuttle-200" />

      <div className="flex items-center gap-3">
        <Image src={creator.avatar} alt="" width={52} height={52} className="size-[52px] rounded-full object-cover" />
        <div>
          <p className="text-lg leading-[1.2] font-medium text-shuttle-950">{creator.name}</p>
          <p className="text-base leading-[1.6] text-shuttle-500">Professional Creator</p>
        </div>
      </div>
      <p className="mt-6 text-base leading-[1.6] text-shuttle-500">{course.pitch}</p>
      <Button variant="outline" size="xs" href={`/creators/${creator.slug}`} className="mt-6">
        See Full Profile
      </Button>
    </aside>
  );
}
