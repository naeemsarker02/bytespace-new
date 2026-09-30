import Image from "next/image";
import FollowButton from "@/components/creator/FollowButton";
import GridBackdrop from "@/components/ui/GridBackdrop";
import type { Creator } from "@/types";

export default function CreatorHero({ creator }: { creator: Creator }) {
  const stats = [
    { value: creator.products, label: "Products" },
    { value: creator.followers, label: "Followers" },
  ];

  return (
    <section className="relative overflow-hidden bg-persian-800 px-5 pt-[140px] pb-14 md:px-8 xl:h-[592px] xl:px-0 xl:pt-[172px] xl:pb-0">
      <GridBackdrop />
      <div className="relative z-10 mx-auto max-w-[1200px]">
        <div className="flex items-start gap-6">
          <Image
            src={creator.avatar}
            alt={`Photo of ${creator.name}`}
            width={96}
            height={96}
            priority
            className="size-24 shrink-0 rounded-card object-cover"
          />
          <div className="pt-1">
            <div className="flex flex-wrap items-center gap-4">
              <h1 className="font-heading text-3xl leading-[1.2] font-semibold tracking-[-0.36px] text-white md:text-4xl">
                {creator.name}
              </h1>
              <span className="rounded-card bg-electric-400 px-6 py-2 text-base leading-[1.2] font-medium text-shuttle-950">
                {creator.badge}
              </span>
            </div>
            <p className="mt-2 text-xl leading-[1.4] text-white">{creator.role}</p>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-1 text-lg leading-[1.6] text-white">
          {creator.bio.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>

        <div className="mt-10 flex flex-wrap items-center justify-between gap-4">
          <ul className="flex flex-wrap gap-4">
            {stats.map((stat) => (
              <li
                key={stat.label}
                className="inline-flex h-[46px] items-center gap-2 rounded-card bg-white px-6 text-lg leading-[1.2] text-shuttle-950"
              >
                <span className="text-persian-800">{stat.value}</span>
                {stat.label}
              </li>
            ))}
          </ul>
          <FollowButton />
        </div>
      </div>
    </section>
  );
}
