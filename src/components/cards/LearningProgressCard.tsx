import FloatingCard from "@/components/ui/FloatingCard";
import ProgressBar from "@/components/ui/ProgressBar";
import { cn } from "@/lib/cn";

interface LearningProgressCardProps {
  className?: string;
}

// Shown in the hero and in the "Professional Growth" section.
export default function LearningProgressCard({ className }: LearningProgressCardProps) {
  return (
    <FloatingCard className={cn("flex-col gap-2", className)}>
      <p className="text-sm leading-[1.2] font-medium text-shuttle-950">Learning Progress</p>
      <p className="font-heading text-5xl leading-[1.2] font-semibold tracking-[-0.48px] text-shuttle-950">55%</p>
      <ProgressBar value={55} />
    </FloatingCard>
  );
}
