import { notFound } from "next/navigation";
import type { ReactNode } from "react";
import CourseHeader from "@/components/course/CourseHeader";
import CourseSidebar from "@/components/course/CourseSidebar";
import CourseTabs from "@/components/course/CourseTabs";
import CourseVideo from "@/components/course/CourseVideo";
import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";
import Container from "@/components/ui/Container";
import GridBackdrop from "@/components/ui/GridBackdrop";
import { courses } from "@/data/courses";
import { getCourseDetail } from "@/data/course-detail";

interface CourseLayoutProps {
  children: ReactNode;
  params: Promise<{ slug: string }>;
}

// One page per course id at build time; any other id shows the 404 page.
export function generateStaticParams() {
  return courses.map((course) => ({ slug: course.id }));
}

// Shared frame of the About, Lessons and Reviews pages: blue hero (title + preview picture),
// the Enroll card on the right and the tabs. `children` is the tab content.
//
// Layout trick: everything sits in one CSS grid. On xl the Enroll card spans the second and
// third row, so it starts inside the blue area and continues over the white area, as in Figma.
export default async function CourseLayout({ children, params }: CourseLayoutProps) {
  const { slug } = await params;
  const course = getCourseDetail(slug);
  if (!course) notFound();

  return (
    <>
      <Navbar />
      <main className="overflow-x-clip">
        <Container>
          <div className="grid grid-cols-1 xl:grid-cols-[725px_412px] xl:justify-between">
            {/* Blue background behind rows 1 and 2, full width of the screen. */}
            <div aria-hidden="true" className="relative col-span-full row-start-1 row-end-3">
              <div className="absolute inset-y-0 left-1/2 w-screen -translate-x-1/2 overflow-hidden bg-persian-800">
                <GridBackdrop />
              </div>
            </div>

            <div className="relative z-10 col-span-full row-start-1 pt-[110px] pb-8 xl:pt-[172px] xl:pb-[59px]">
              <CourseHeader course={course} />
            </div>

            <div className="relative z-10 row-start-2 pb-10 xl:col-start-1 xl:pb-[62px]">
              <CourseVideo src={course.video} title={course.title} />
            </div>

            <div className="row-start-3 pb-16 xl:col-start-1 xl:pt-[62px]">
              <CourseTabs slug={course.slug} />
              <div className="mt-10">{children}</div>
            </div>

            <div className="relative z-10 row-start-4 pb-16 xl:col-start-2 xl:row-start-2 xl:row-end-4 xl:pb-0">
              <CourseSidebar course={course} />
            </div>
          </div>
        </Container>
      </main>
      <Footer />
    </>
  );
}
