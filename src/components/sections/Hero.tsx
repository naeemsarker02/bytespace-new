import Image from "next/image";
import HappyStudentsCard from "@/components/cards/HappyStudentsCard";
import LearningProgressCard from "@/components/cards/LearningProgressCard";
import Button from "@/components/ui/Button";
import FloatingCard from "@/components/ui/FloatingCard";
import { assets } from "@/data/assets";

// Below xl the hero is a normal top-to-bottom flow. From xl (1280px) up it follows the
// Figma layout: a 1024px tall frame where the illustration and cards are positioned
// relative to the horizontal center (Figma frame = 1440px wide).
export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-persian-800 pt-[140px] pb-16 md:pt-[169px] xl:h-[1024px] xl:pb-0">
      <Image src={assets.backgrounds.grid} alt="" fill priority sizes="100vw" className="pointer-events-none object-cover object-top" />
      <Image
        src={assets.backgrounds.heroEllipse}
        alt=""
        width={1149}
        height={1149}
        className="pointer-events-none absolute top-[582px] left-1/2 hidden max-w-none -translate-x-1/2 xl:block"
      />

      <div className="relative z-10 mx-auto flex max-w-[1200px] flex-col items-center gap-[60px] px-5 text-center">
        <div className="flex flex-col items-center gap-8">
          <h1 className="max-w-[935px] font-heading text-4xl leading-[1.2] font-semibold tracking-[-0.72px] text-white sm:text-5xl md:text-6xl xl:text-[72px]">
            Get Access to Hundreds Courses Available
          </h1>
          <p className="text-lg leading-[1.6] text-shuttle-100">
            Unlock your creativity, gain valuable knowledge, and grow your business with our wide range of courses.
          </p>
        </div>

        <form role="search" action="#" className="flex w-full max-w-[621px] flex-col gap-4 sm:flex-row">
          <label className="flex h-[52px] flex-1 items-center gap-2 rounded-card bg-white px-6 py-3 focus-within:outline-2 focus-within:outline-electric-400 sm:w-[461px] sm:flex-none">
            <span className="sr-only">Search courses</span>
            <Image src={assets.icons.search} alt="" width={24} height={24} />
            <input
              type="search"
              name="q"
              placeholder="Course, topic, creator"
              className="w-full bg-transparent text-lg leading-[1.6] text-shuttle-950 placeholder:text-shuttle-400 focus:outline-none"
            />
          </label>
          <Button type="submit">Search</Button>
        </form>
      </div>

      {/* Illustration */}
      <div className="relative z-10 mx-auto mt-14 aspect-[578/541] w-full max-w-[578px] px-5 xl:absolute xl:top-[512px] xl:left-1/2 xl:mt-0 xl:-translate-x-1/2 xl:px-0">
        <Image src={assets.hero.main} alt="Smiling student with headphones holding a laptop" fill priority sizes="578px" className="object-contain" />
      </div>

      {/* Floating cards and 3D ornaments: desktop only (xl and up) */}
      <LearningProgressCard className="absolute top-[651px] left-1/2 z-10 ml-[122px] hidden xl:flex" />
      <HappyStudentsCard className="absolute top-[837px] left-1/2 z-10 -ml-[392px] hidden xl:flex" />
      <Image
        src={assets.hero.ornaments}
        alt=""
        width={1719}
        height={803}
        className="pointer-events-none absolute top-[221px] left-1/2 z-10 hidden h-[803px] w-[1719px] max-w-none -translate-x-1/2 xl:block"
        style={{ marginLeft: 21.5 }}
      />
      <FloatingCard className="absolute top-[639px] left-1/2 z-10 -ml-[316px] hidden xl:block">
        <p className="text-base leading-[1.2] font-medium text-shuttle-950">UI/UX Design</p>
        <p className="flex gap-2 text-xs leading-[1.6] text-shuttle-400">
          <span>200 Courses</span>
          <span aria-hidden="true" className="text-[10px] leading-[1.5]">
            •
          </span>
          <span>1000+ Students</span>
        </p>
      </FloatingCard>
    </section>
  );
}
