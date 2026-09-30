import { cn } from "@/lib/cn";

interface ProgressBarProps {
  value: number; // 0-100
  trackClassName?: string;
  className?: string; // width of the bar, 200px by default
}

// 8px high bar with a lime fill (200px wide unless className sets another width).
export default function ProgressBar({ value, trackClassName = "bg-shuttle-50", className = "w-[200px]" }: ProgressBarProps) {
  return (
    <div
      role="progressbar"
      aria-valuenow={value}
      aria-valuemin={0}
      aria-valuemax={100}
      className={cn("h-2 rounded-card", className, trackClassName)}
    >
      <div className="h-full rounded-card bg-electric-400" style={{ width: `${value}%` }} />
    </div>
  );
}
