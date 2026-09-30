import Image from "next/image";
import FloatingCard from "@/components/ui/FloatingCard";
import HappyStudentsCard from "@/components/cards/HappyStudentsCard";
import ProgressBar from "@/components/ui/ProgressBar";
import { assets } from "@/data/assets";
import { creatorBenefits } from "@/data/home";

// "Create & Manage Courses Easily." - illustration on the left, text and checklist on the right.
// The visual is a 541 x 596 box; overlay positions are percentages of that box.
export default function CreatorRow() {
  return (
    <div id="creators" className="flex scroll-mt-8 flex-col items-center gap-12 xl:flex-row xl:gap-[79px]">
      <div className="relative aspect-[541/596] w-full max-w-[541px] min-w-0">
        <FloatingCard variant="blue" className="absolute top-[7.38%] left-0 hidden flex-col gap-2 md:flex">
          <div>
            <p className="text-base leading-[1.2] font-medium">Total Revenue</p>
            <p className="text-[10px] leading-[1.2]">July 1-28</p>
          </div>
          <div className="flex w-[200px] items-center justify-between">
            <p className="font-heading text-2xl leading-8 font-semibold tracking-[-0.24px]">$120.29</p>
            <span className="rounded-card bg-electric-500 px-2 py-0.5 text-[10px] leading-5 font-medium text-shuttle-950">+12$</span>
          </div>
          <ProgressBar value={55} trackClassName="bg-white" />
        </FloatingCard>

        <FloatingCard variant="blue" className="absolute top-[32.55%] left-0 hidden w-[134px] flex-col items-start gap-2 md:flex">
          <div>
            <p className="text-base leading-[1.2] font-medium">Year to Date</p>
            <p className="text-[10px] leading-[1.2]">2023</p>
          </div>
          <p className="font-heading text-2xl leading-8 font-semibold tracking-[-0.24px] whitespace-nowrap">$1,200.38</p>
          <span className="rounded-card bg-electric-500 px-2 py-0.5 text-[10px] leading-5 font-medium text-shuttle-950">+12$</span>
        </FloatingCard>

        <div className="absolute top-0 left-0 h-full w-full md:left-[5.18%] md:w-[80.41%]">
          <Image
            src={assets.features.creatorWoman}
            alt="Smiling creator with headphones holding a tablet"
            fill
            sizes="435px"
            className="object-contain"
          />
        </div>

        <HappyStudentsCard className="absolute top-[69.3%] left-[52.31%] hidden md:flex" />
        <Image
          src={assets.features.ornament}
          alt=""
          width={215}
          height={215}
          className="pointer-events-none absolute top-[19.13%] left-[56.38%] hidden md:block"
        />
      </div>

      <div className="flex w-full max-w-[580px] flex-col gap-10">
        <h2 className="max-w-[391px] font-heading text-3xl leading-[1.2] font-semibold tracking-[-0.44px] text-shuttle-950 md:text-[44px]">
          Create &amp; Manage Courses Easily.
        </h2>
        <p className="text-lg leading-7 text-shuttle-700">
          <strong className="font-bold text-shuttle-950">ByteSpace</strong> supports individuals or entities in the
          creation, publication, and administration of educational courses.
        </p>
        <ul className="flex flex-col gap-4">
          {creatorBenefits.map((benefit) => (
            <li key={benefit} className="flex items-center gap-2 text-lg leading-[1.2] font-medium text-shuttle-950">
              <Image src={assets.icons.check} alt="" width={24} height={24} />
              {benefit}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
