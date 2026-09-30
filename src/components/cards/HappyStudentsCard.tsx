import AvatarStack from "@/components/ui/AvatarStack";
import FloatingCard from "@/components/ui/FloatingCard";
import Icon from "@/components/ui/icons";
import { assets } from "@/data/assets";
import { cn } from "@/lib/cn";

interface HappyStudentsCardProps {
  className?: string;
  variant?: "white" | "lime";
}

// Shown in the hero and in the "Create & Manage Courses" section.
export default function HappyStudentsCard({ className, variant = "white" }: HappyStudentsCardProps) {
  return (
    <FloatingCard variant={variant} className={cn("w-[258px] flex-col justify-center gap-2", className)}>
      <div>
        <p className="text-base leading-[1.2] font-medium text-shuttle-950">Happy Students</p>
        <p className="flex items-center text-xs leading-[1.6] text-shuttle-400">
          <span className="text-shuttle-950">4.5&nbsp;</span>
          (240)
          <Icon name="star" size={16} className="text-persian-800" />
        </p>
      </div>
      <AvatarStack
        avatars={assets.studentAvatars}
        size={43}
        overlap={16}
        extra="2K+"
        extraClassName="text-xs font-bold"
        extraTone={variant === "lime" ? "dark" : "lime"}
      />
    </FloatingCard>
  );
}
