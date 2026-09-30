import Image from "next/image";
import Link from "next/link";
import AuthCard from "@/components/auth/AuthCard";
import AuthShowcase from "@/components/auth/AuthShowcase";
import GridBackdrop from "@/components/ui/GridBackdrop";
import { assets } from "@/data/assets";
import { authContent } from "@/data/auth";
import type { AuthMode } from "@/data/auth";

// Full-screen blue page shared by Sign In and Sign Up. Below xl the illustration is
// hidden and the elements simply stack (our responsive decision, Figma is desktop only).
export default function AuthPage({ mode }: { mode: AuthMode }) {
  const { side } = authContent[mode];
  return (
    <main className="relative overflow-hidden bg-persian-800 px-5 py-8 md:px-8 xl:min-h-[1024px] xl:px-0 xl:py-0">
      <GridBackdrop />
      <div className="relative mx-auto flex max-w-[1200px] flex-col gap-10 xl:block xl:h-[1024px]">
        <Link href="/" aria-label="ByteSpace home" className="w-fit xl:absolute xl:top-[35px] xl:left-0">
          <Image src={assets.logoMark} alt="" width={29} height={32} priority />
        </Link>

        <div className="max-w-[520px] xl:absolute xl:top-[120px] xl:left-0">
          <h2 className="font-heading text-2xl leading-[1.3] font-semibold text-white">{side.title}</h2>
          <p className="mt-6 text-lg leading-[1.6] text-shuttle-50 xl:text-xl">{side.text}</p>
        </div>

        <div className="xl:absolute xl:top-[300px] xl:left-0">
          <AuthShowcase />
        </div>

        <div className="mx-auto w-full max-w-[579px] xl:absolute xl:top-[120px] xl:right-0 xl:mx-0">
          <AuthCard mode={mode} />
        </div>
      </div>
    </main>
  );
}
