import CourseCard from "@/components/cards/CourseCard";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import { chipRows, courses, defaultChip, moreChipsLabel } from "@/data/courses";
import CategoryChips from "./CategoryChips";

export default function CoursesSection() {
  return (
    <section id="courses" className="scroll-mt-8 bg-white pt-12 md:pt-[72px]">
      <Container>
        <SectionHeading
          title="Discover Your Passion, Build Your Skills"
          description="At Bytespace Courses, we bring you closer to life-changing knowledge. Explore a variety of courses across different fields, from technology to the arts, and make a difference in your career and life."
          titleClassName="max-w-[588px]"
        />
        <div className="mt-8 md:mt-[42px]">
          <CategoryChips rows={chipRows} defaultActive={defaultChip} moreLabel={moreChipsLabel} />
        </div>
        <ul className="mt-10 flex flex-wrap justify-center gap-10 md:mt-[77px]">
          {courses.map((course) => (
            <li key={course.id} className="max-w-full">
              <CourseCard course={course} />
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
