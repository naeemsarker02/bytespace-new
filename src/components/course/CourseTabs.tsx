"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/cn";

const tabs = [
  { label: "About", path: "" },
  { label: "Lessons", path: "/lessons" },
  { label: "Reviews", path: "/reviews" },
];

// Client Component: it needs the current URL to highlight the active tab.
// Each tab is a real page, so the browser back button and direct links work.
export default function CourseTabs({ slug }: { slug: string }) {
  const pathname = usePathname();
  const base = `/courses/${slug}`;

  return (
    <nav aria-label="Course sections">
      <ul className="flex flex-wrap gap-4">
        {tabs.map((tab) => {
          const href = `${base}${tab.path}`;
          const active = pathname === href;
          return (
            <li key={tab.label}>
              <Link
                href={href}
                aria-current={active ? "page" : undefined}
                className={cn(
                  "block rounded-card px-4 py-3 text-base leading-[1.2] font-medium transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-persian-800",
                  active ? "bg-electric-400 text-shuttle-950" : "bg-shuttle-50 text-shuttle-700 hover:bg-shuttle-100",
                )}
              >
                {tab.label}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
