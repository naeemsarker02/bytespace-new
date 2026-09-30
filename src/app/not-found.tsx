import type { Metadata } from "next";
import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";
import Button from "@/components/ui/Button";
import GridBackdrop from "@/components/ui/GridBackdrop";

export const metadata: Metadata = { title: "Page not found" };

// Shown by Next.js for every URL that has no page, and when a page calls notFound().
export default function NotFound() {
  return (
    <>
      <Navbar />
      <main>
        <section className="relative flex min-h-[640px] flex-col items-center overflow-hidden bg-persian-800 px-5 pt-[110px] pb-24 text-center md:pt-[130px] xl:min-h-[957px] xl:pt-[153px]">
          <GridBackdrop />
          {/* Big number: lime at the top, fading into the blue at the bottom. */}
          <p
            aria-hidden="true"
            className="relative bg-[linear-gradient(180deg,#d4fb20_0%,#d4fb20_30%,rgb(212_251_32/0)_85%)] bg-clip-text font-heading text-[160px] leading-none font-semibold text-transparent md:text-[300px] xl:text-[480px]"
          >
            404
          </p>
          <h1 className="relative -mt-10 max-w-[900px] font-heading text-4xl leading-[1.15] font-semibold tracking-[-0.72px] text-white md:-mt-20 md:text-6xl xl:-mt-32 xl:text-7xl">
            The page you are looking for doesn&rsquo;t exist
          </h1>
          <p className="relative mt-8 text-lg leading-[1.6] text-shuttle-50 md:text-xl">
            Try to use a correct url or go back to homepage to start again
          </p>
          <Button href="/" className="relative mt-9">
            Back to Home
          </Button>
        </section>
      </main>
      <Footer />
    </>
  );
}
