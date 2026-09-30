import Icon from "@/components/ui/icons";
import { sortLabel, toolbarFilters } from "@/data/catalog";

const pill =
  "inline-flex h-12 items-center gap-3 rounded-card border border-shuttle-200 bg-white px-4 text-base leading-[1.2] font-medium text-shuttle-700 transition-colors hover:bg-shuttle-50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-persian-800";

// Filter / Level / Category buttons and the sort button, shared by Search and Creator pages.
// The design only shows the buttons (no menus), so they do not open anything.
export default function FilterToolbar() {
  return (
    <div className="flex flex-wrap items-center justify-between gap-4">
      <div className="flex flex-wrap gap-4">
        {toolbarFilters.map((filter) => (
          <button key={filter.label} type="button" className={pill}>
            <Icon name={filter.icon} />
            {filter.label}
          </button>
        ))}
      </div>
      <button type="button" className={pill}>
        <Icon name="sort" />
        {sortLabel}
      </button>
    </div>
  );
}
