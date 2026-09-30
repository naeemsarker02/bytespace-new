import CategoryCard from "@/components/cards/CategoryCard";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import { categories } from "@/data/categories";

export default function CategoriesSection() {
  return (
    <section className="bg-white pt-12 pb-16 md:pt-[72px] xl:pb-[120px]">
      <Container>
        <SectionHeading
          title="Explore Diverse Learning Paths at Bytespace"
          description="At Bytespace, we believe in empowering individuals through knowledge. Our diverse range of courses spans various fields, ensuring there's something for everyone. Unleash your potential and explore our carefully curated categories."
          size="medium"
        />
        <ul className="mt-10 grid grid-cols-2 justify-items-center gap-6 sm:grid-cols-3 md:mt-[68px] xl:grid-cols-[repeat(6,167px)] xl:justify-between">
          {categories.map((category) => (
            <CategoryCard key={category.id} category={category} />
          ))}
        </ul>
      </Container>
    </section>
  );
}
