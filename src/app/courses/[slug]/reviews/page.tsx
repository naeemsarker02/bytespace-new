import type { Metadata } from "next";
import { notFound } from "next/navigation";
import RatingSummary from "@/components/course/RatingSummary";
import ReviewList from "@/components/course/ReviewList";
import { getCourseDetail } from "@/data/course-detail";

type ReviewsPageProps = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: ReviewsPageProps): Promise<Metadata> {
  const { slug } = await params;
  const course = getCourseDetail(slug);
  return { title: course ? `Reviews | ${course.title}` : "Reviews" };
}

const heading = "font-heading text-xl leading-[1.2] font-semibold text-shuttle-950";

// "Reviews" tab.
export default async function CourseReviewsPage({ params }: ReviewsPageProps) {
  const { slug } = await params;
  const course = getCourseDetail(slug);
  if (!course) notFound();

  return (
    <div className="flex flex-col gap-8">
      <section>
        <h2 className={heading}>What Learners Are Saying</h2>
        <p className="mt-4 text-base leading-[1.6] text-shuttle-600">
          Discover what our learners have to say about their experience with &lsquo;{course.title}.&rsquo; Read reviews
          and ratings from individuals who have embarked on the transformative journey of mastering digital asset
          creation.
        </p>
        <div className="mt-6">
          <RatingSummary />
        </div>
      </section>

      <section>
        <h2 className={heading}>Individual Reviews:</h2>
        <div className="mt-6">
          <ReviewList />
        </div>
      </section>
    </div>
  );
}
