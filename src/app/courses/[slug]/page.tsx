import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import CheckList from "@/components/course/CheckList";
import { getCourseDetail } from "@/data/course-detail";

type CoursePageProps = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: CoursePageProps): Promise<Metadata> {
  const { slug } = await params;
  const course = getCourseDetail(slug);
  return { title: course?.title ?? "Course" };
}

const heading = "font-heading text-xl leading-[1.2] font-semibold text-shuttle-950";

// "About" tab.
export default async function CourseAboutPage({ params }: CoursePageProps) {
  const { slug } = await params;
  const course = getCourseDetail(slug);
  if (!course) notFound();

  return (
    <div className="flex flex-col gap-8">
      <section>
        <h2 className={heading}>Description</h2>
        <div className="mt-4 flex flex-col gap-4 text-base leading-[1.6] text-shuttle-600">
          {course.description.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
      </section>

      <section>
        <h2 className={heading}>Sneak Peak</h2>
        <ul className="mt-4 grid grid-cols-2 gap-4 sm:grid-cols-4">
          {course.sneakPeek.map((src, index) => (
            <li key={src} className="relative aspect-[167/125] overflow-hidden rounded-image bg-shuttle-100">
              <Image src={src} alt={`Course preview ${index + 1}`} fill sizes="(min-width: 640px) 167px, 50vw" className="object-cover" />
            </li>
          ))}
        </ul>
      </section>

      <section>
        <h2 className={heading}>Key Points</h2>
        <div className="mt-4">
          <CheckList items={course.keyPoints} />
        </div>
      </section>
    </div>
  );
}
