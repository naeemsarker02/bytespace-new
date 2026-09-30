import Image from "next/image";
import CourseCard from "@/components/cards/CourseCard";
import HappyStudentsCard from "@/components/cards/HappyStudentsCard";
import { assets } from "@/data/assets";
import { courses } from "@/data/courses";

// Decorative illustration on the left of the auth pages (two course cards, a lime stats card
// and 3D shapes). Positions are the Figma offsets inside a 516 x 570 box. Desktop only.
export default function AuthShowcase() {
  return (
    <div inert className="relative hidden h-[570px] w-[516px] xl:block">
      <div className="absolute top-[94px] left-0">
        <CourseCard course={courses[1]} />
      </div>
      <div className="absolute top-[5px] left-[112px] z-10">
        <CourseCard course={courses[2]} />
      </div>
      <Image src={assets.auth.torus} alt="" width={101} height={92} className="absolute top-[46px] left-[51px] z-20" />
      <HappyStudentsCard variant="lime" className="absolute top-[440px] left-[226px] z-20" />
      <Image src={assets.auth.pyramid} alt="" width={125} height={137} className="absolute top-[424px] left-0 z-30" />
      <Image src={assets.auth.spring} alt="" width={116} height={124} className="absolute top-[354px] left-[380px] z-30" />
    </div>
  );
}
