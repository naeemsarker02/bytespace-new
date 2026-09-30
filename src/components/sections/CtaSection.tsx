import Image from "next/image";
import Button from "@/components/ui/Button";
import { assets } from "@/data/assets";

export default function CtaSection() {
  return (
    <section className="relative overflow-hidden bg-persian-800 px-5 py-16 md:py-[85px] xl:h-[488px] xl:py-0">
      <Image src={assets.backgrounds.grid} alt="" fill sizes="100vw" className="pointer-events-none object-cover object-top" />
      <Image
        src={assets.cta.ornaments}
        alt=""
        width={1440}
        height={488}
        className="pointer-events-none absolute top-0 left-1/2 hidden h-[488px] w-[1440px] max-w-none -translate-x-1/2 xl:block"
      />
      <div className="relative z-10 mx-auto flex max-w-[964px] flex-col items-center gap-10 text-center xl:h-full xl:justify-center">
        <h2 className="max-w-[710px] font-heading text-3xl leading-[1.2] font-semibold tracking-[-0.44px] text-shuttle-50 md:text-[44px]">
          Unlock Your Potential as a Creator with ByteSpace
        </h2>
        <p className="text-lg leading-[1.6] text-shuttle-50">
          Experience the collaboration of numerous creators and an expanding selection of courses. Register now and
          become a part of a community comprising over 10,000 local and international creators. Utilize our Course
          Editor, and showcase your expertise by publishing your finest course on the ByteSpace Course Library.
        </p>
        <Button href="#">Join as Creator</Button>
      </div>
    </section>
  );
}
