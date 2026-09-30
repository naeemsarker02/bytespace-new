import Icon from "@/components/ui/icons";
import { cn } from "@/lib/cn";

interface PaginationProps {
  page: number; // current page, starting at 1
  pageCount: number;
  onChange: (page: number) => void;
}

const arrow =
  "flex h-12 w-14 items-center justify-center rounded-card border border-shuttle-200 bg-white text-shuttle-950 transition-colors hover:bg-shuttle-50 disabled:cursor-not-allowed disabled:opacity-40 disabled:hover:bg-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-persian-800";

export default function Pagination({ page, pageCount, onChange }: PaginationProps) {
  if (pageCount <= 1) return null;
  const numbers = Array.from({ length: pageCount }, (_, index) => index + 1);

  return (
    <nav aria-label="Pagination" className="flex items-center justify-center gap-3 sm:gap-6">
      <button type="button" aria-label="Previous page" disabled={page === 1} onClick={() => onChange(page - 1)} className={arrow}>
        <Icon name="chevronLeft" />
      </button>
      <ul className="flex items-center gap-1 sm:gap-2">
        {numbers.map((number) => (
          <li key={number}>
            <button
              type="button"
              aria-label={`Page ${number}`}
              aria-current={number === page ? "page" : undefined}
              onClick={() => onChange(number)}
              className={cn(
                "min-w-8 rounded-card px-2 py-1 text-xl leading-[1.4] focus-visible:outline-2 focus-visible:outline-persian-800",
                number === page ? "text-shuttle-300" : "text-shuttle-950 hover:text-persian-800",
              )}
            >
              {number}
            </button>
          </li>
        ))}
      </ul>
      <button
        type="button"
        aria-label="Next page"
        disabled={page === pageCount}
        onClick={() => onChange(page + 1)}
        className={arrow}
      >
        <Icon name="chevronRight" />
      </button>
    </nav>
  );
}
