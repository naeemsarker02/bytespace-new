import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";
import CategoriesSection from "@/components/sections/CategoriesSection";
import CoursesSection from "@/components/sections/CoursesSection";
import CtaSection from "@/components/sections/CtaSection";
import FeaturesSection from "@/components/sections/FeaturesSection";
import Hero from "@/components/sections/Hero";
import LogoStrip from "@/components/sections/LogoStrip";
import TestimonialsSection from "@/components/sections/TestimonialsSection";

// The landing page is just the sections stacked in the same order as the Figma Home frame.
export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <LogoStrip />
        <CoursesSection />
        <CategoriesSection />
        <FeaturesSection />
        <CtaSection />
        <TestimonialsSection />
      </main>
      <Footer />
    </>
  );
}
