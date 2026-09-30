"use client";

import { useState } from "react";
import Chip from "@/components/ui/Chip";

interface CategoryChipsProps {
  rows: string[][];
  defaultActive: string;
  moreLabel: string;
}

// Client Component: it keeps which chip is active in state.
// The Figma design does not link chips to specific courses, so this only changes the highlight.
export default function CategoryChips({ rows, defaultActive, moreLabel }: CategoryChipsProps) {
  const [active, setActive] = useState(defaultActive);

  return (
    <div className="flex flex-col items-center gap-[21px]" role="group" aria-label="Course categories">
      {rows.map((row, rowIndex) => (
        <div key={row.join("|")} className="flex flex-wrap items-center justify-center gap-4">
          {row.map((label) => (
            <Chip key={label} label={label} active={label === active} onClick={() => setActive(label)} />
          ))}
          {rowIndex === rows.length - 1 && (
            <a href="#courses" className="text-base leading-[1.2] font-medium text-persian-800 hover:underline">
              {moreLabel}
            </a>
          )}
        </div>
      ))}
    </div>
  );
}
