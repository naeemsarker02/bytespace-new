import Image from "next/image";
import CourseCard from "@/components/cards/CourseCard";
import LearningProgressCard from "@/components/cards/LearningProgressCard";
import { assets } from "@/data/assets";
import { courses } from "@/data/courses";
import { stats } from "@/data/home";

// "Your Path to Professional Growth Starts Here!" - text on the left, illustration on the right.
// The visual is a 621 x 552 box; overlay positions are percentages of that box so they follow it.
export default function GrowthRow() {
  return (
    <div className="flex flex-col items-center gap-12 xl:flex-row xl:gap-[63px]">
      <div className="flex w-full max-w-[574px] shrink-0 flex-col items-center gap-10 text-center xl:items-start xl:text-left">
        <h2 className="font-heading text-3xl leading-[1.2] font-semibold tracking-[-0.44px] text-shuttle-950 md:text-[44px]">
          Your Path to Professional Growth Starts Here!
        </h2>
        <p className="mx-auto max-w-[477px] text-lg xl:mx-0 leading-[1.6] text-shuttle-700">
          Explore our curated selection of courses tailored to enhance your capabilities and accelerate your career
          journey. Whether you are looking to sharpen specific skills, gain industry expertise, or embark on a new
          career path entirely, we have the resources you need.
        </p>
        <dl className="flex flex-wrap items-end justify-center gap-x-14 gap-y-6 xl:justify-start">
          {stats.map((stat) => (
            <div key={stat.label} className="flex flex-col-reverse items-center xl:items-start">
              <dt className="text-lg leading-[1.6] text-shuttle-700">{stat.label}</dt>
              <dd className="font-heading text-4xl leading-[44px] font-medium tracking-[-0.36px] text-persian-800">
                {stat.value}
              </dd>
            </div>
          ))}
        </dl>
      </div>

      <div className="relative aspect-[621/552] w-full max-w-[621px] min-w-0">
        <div className="absolute top-0 left-0 hidden md:block">
          <CourseCard course={courses[0]} />
        </div>
        <div className="absolute top-[2.17%] left-0 h-[97.83%] w-full md:w-[92.91%]">
          <Image
            src={assets.hero.main}
            alt="Smiling student with headphones holding a laptop"
            fill
            sizes="577px"
            className="object-contain"
          />
        </div>
        <LearningProgressCard className="absolute top-[38.59%] left-[55.56%] hidden md:flex" />
        <Image
          src={assets.features.ornament}
          alt=""
          width={215}
          height={215}
          className="pointer-events-none absolute top-[12.14%] left-[65.38%] hidden md:block"
        />
      </div>
    </div>
  );
}
