import TestimonialCard from "@/components/cards/TestimonialCard";
import Container from "@/components/ui/Container";
import { testimonials } from "@/data/testimonials";

// Soft glows behind the section (the Figma frame uses three blurred ellipses).
const backdrop = [
  "radial-gradient(circle 420px at 85% 0%, rgba(160,180,255,0.35), transparent 70%)",
  "radial-gradient(circle 300px at 45% 0%, rgba(212,251,32,0.28), transparent 70%)",
  "radial-gradient(circle 380px at 0% 35%, rgba(160,180,255,0.30), transparent 70%)",
].join(", ");

export default function TestimonialsSection() {
  return (
    <section className="relative overflow-hidden bg-surface-alt py-16 md:py-[74px]">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0" style={{ backgroundImage: backdrop }} />
      <Container className="relative flex flex-col gap-12 xl:gap-[72px]">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:gap-[43px]">
          <h2 className="font-heading text-3xl leading-[1.2] font-semibold tracking-[-0.44px] text-black md:text-[44px] lg:w-[577px] lg:shrink-0">
            Discover What Our Community Is Saying
          </h2>
          <p className="text-lg leading-[1.6] text-ink-700 lg:w-[580px]">
            At ByteSpace, our vibrant community of learners and creators is at the heart of what we do. Hear directly
            from those who have experienced the transformative journey of learning and creating on our platform.
            Explore testimonials that reflect the diverse perspectives of enthusiastic learners and accomplished
            creators.
          </p>
        </div>
        <div className="flex flex-wrap justify-center gap-[41px] xl:flex-nowrap xl:justify-between">
          {testimonials.map((testimonial) => (
            <TestimonialCard key={testimonial.id} testimonial={testimonial} />
          ))}
        </div>
      </Container>
    </section>
  );
}
