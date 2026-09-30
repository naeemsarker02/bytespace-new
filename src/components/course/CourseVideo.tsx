import Image from "next/image";

interface CourseVideoProps {
  src: string;
  title: string;
}

// The design only shows a preview picture (with its play button drawn into the image),
// so this is a static image. No video is played or loaded.
export default function CourseVideo({ src, title }: CourseVideoProps) {
  return (
    <figure className="relative aspect-[720/479] w-full overflow-hidden rounded-card bg-shuttle-200 xl:ml-[5px] xl:w-[720px]">
      <Image src={src} alt={`Preview of the course ${title}`} fill priority sizes="(min-width: 1280px) 720px, 100vw" className="object-cover" />
    </figure>
  );
}
