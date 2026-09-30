import Link from "next/link";
import AuthForm from "@/components/auth/AuthForm";
import { authContent } from "@/data/auth";
import type { AuthMode } from "@/data/auth";

// The white card with the form. Same size on Sign In and Sign Up (579 x 783 in Figma).
export default function AuthCard({ mode }: { mode: AuthMode }) {
  const content = authContent[mode];
  return (
    <div className="flex w-full max-w-[579px] flex-col rounded-icon bg-white p-8 sm:p-16 xl:min-h-[783px]">
      <p className="text-xl leading-[1.6] text-persian-800">{content.eyebrow}</p>
      <h1 className="mt-1 mb-10 font-heading text-4xl leading-[1.2] font-semibold tracking-[-0.48px] text-shuttle-950 sm:text-5xl">
        {content.heading}
      </h1>
      <AuthForm mode={mode} />
      <p className="mt-12 text-center text-lg leading-[1.6] text-shuttle-500 xl:mt-auto">
        {content.alt.text}{" "}
        <Link href={content.alt.href} className="text-persian-800 hover:underline">
          {content.alt.linkLabel}
        </Link>
      </p>
    </div>
  );
}
