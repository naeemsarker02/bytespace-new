import type { Metadata } from "next";
import { notFound } from "next/navigation";
import ModuleList from "@/components/course/ModuleList";
import ProgressBar from "@/components/ui/ProgressBar";
import { getCourseDetail } from "@/data/course-detail";

type LessonsPageProps = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: LessonsPageProps): Promise<Metadata> {
  const { slug } = await params;
  const course = getCourseDetail(slug);
  return { title: course ? `Lessons | ${course.title}` : "Lessons" };
}

const heading = "font-heading text-xl leading-[1.2] font-semibold text-shuttle-950";
const text = "mt-4 text-base leading-[1.6] text-shuttle-600";

// "Lessons" tab.
export default async function CourseLessonsPage({ params }: LessonsPageProps) {
  const { slug } = await params;
  const course = getCourseDetail(slug);
  if (!course) notFound();

  return (
    <div className="flex flex-col gap-8">
      <section>
        <h2 className={heading}>Explore the Modules</h2>
        <p className={text}>
          Immerse yourself in the course content as we break down each module into comprehensive lessons, providing
          practical insights and hands-on experiences.
        </p>
      </section>

      <section>
        <h2 className={heading}>Lesson List</h2>
        <div className="mt-6">
          <ModuleList modules={course.modules} />
        </div>
      </section>

      <section>
        <h2 className={heading}>Lesson Content</h2>
        <p className={text}>
          Engage with each lesson through captivating video content, detailed textual explanations, and interactive
          elements. Download resources, complete assignments, and test your understanding with quizzes.
        </p>
      </section>

      <section>
        <h2 className={heading}>Lesson Progress Tracking</h2>
        <p className={text}>
          Witness your growth as you complete lessons, with an intuitive progress tracking feature guiding you through
          your learning journey.
        </p>
        <div className="mt-6 rounded-float border border-shuttle-200 p-4">
          <p className="text-sm leading-[1.2] font-medium text-shuttle-700">Learning Progress</p>
          <p className="mt-2 font-heading text-4xl leading-[1.2] font-semibold text-shuttle-950">{course.progress}%</p>
          <ProgressBar value={course.progress} className="mt-4 w-full" trackClassName="bg-shuttle-100" />
        </div>
      </section>
    </div>
  );
}
