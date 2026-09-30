import type { Metadata } from "next";
import { notFound } from "next/navigation";
import CourseCard from "@/components/cards/CourseCard";
import CreatorHero from "@/components/creator/CreatorHero";
import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";
import Container from "@/components/ui/Container";
import FilterToolbar from "@/components/ui/FilterToolbar";
import { courses } from "@/data/courses";
import { creators, getCreator } from "@/data/creators";

type CreatorPageProps = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return creators.map((creator) => ({ slug: creator.slug }));
}

export async function generateMetadata({ params }: CreatorPageProps): Promise<Metadata> {
  const { slug } = await params;
  const creator = getCreator(slug);
  return { title: creator?.name ?? "Creator" };
}

export default async function CreatorPage({ params }: CreatorPageProps) {
  const { slug } = await params;
  const creator = getCreator(slug);
  if (!creator) notFound();

  return (
    <>
      <Navbar />
      <main>
        <CreatorHero creator={creator} />
        <section className="bg-white pt-10 pb-16 xl:pt-[62px]">
          <Container>
            <FilterToolbar />
            <ul className="mt-10 grid grid-cols-1 justify-items-center gap-10 md:grid-cols-2 xl:grid-cols-3">
              {courses.map((course) => (
                <li key={course.id} className="max-w-full">
                  <CourseCard course={course} />
                </li>
              ))}
            </ul>
          </Container>
        </section>
      </main>
      <Footer />
    </>
  );
}
