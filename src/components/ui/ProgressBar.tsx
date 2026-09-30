import { cn } from "@/lib/cn";

interface ProgressBarProps {
  value: number; // 0-100
  trackClassName?: string;
}

// 200px wide, 8px high bar with a lime fill.
export default function ProgressBar({ value, trackClassName = "bg-shuttle-50" }: ProgressBarProps) {
  return (
    <div
      role="progressbar"
      aria-valuenow={value}
      aria-valuemin={0}
      aria-valuemax={100}
      className={cn("h-2 w-[200px] rounded-card", trackClassName)}
    >
      <div className="h-full rounded-card bg-electric-400" style={{ width: `${value}%` }} />
    </div>
  );
}
