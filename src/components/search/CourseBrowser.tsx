"use client";

import Image from "next/image";
import { useMemo, useState } from "react";
import CourseCard from "@/components/cards/CourseCard";
import Chip from "@/components/ui/Chip";
import Container from "@/components/ui/Container";
import FilterToolbar from "@/components/ui/FilterToolbar";
import GridBackdrop from "@/components/ui/GridBackdrop";
import Icon from "@/components/ui/icons";
import Pagination from "@/components/ui/Pagination";
import { assets } from "@/data/assets";
import { catalog, searchChips, searchPageSize } from "@/data/catalog";

// Client Component: it owns the search text, the active chip and the current page.
// The search box filters by title and author; the chips only change the highlight (like on Home).
export default function CourseBrowser() {
  const [query, setQuery] = useState("");
  const [activeChip, setActiveChip] = useState(searchChips[0]);
  const [page, setPage] = useState(1);

  const results = useMemo(() => {
    const text = query.trim().toLowerCase();
    if (!text) return catalog;
    return catalog.filter((course) => `${course.title} ${course.author}`.toLowerCase().includes(text));
  }, [query]);

  const pageCount = Math.max(1, Math.ceil(results.length / searchPageSize));
  const visible = results.slice((page - 1) * searchPageSize, page * searchPageSize);

  return (
    <>
      <section className="relative overflow-hidden bg-persian-800 px-5 pt-[140px] pb-14 xl:h-[360px] xl:pt-[164px] xl:pb-0">
        <GridBackdrop />
        <div className="relative z-10 mx-auto flex max-w-[624px] flex-col items-center gap-8">
          <h1 className="text-center font-heading text-3xl leading-[1.2] font-semibold tracking-[-0.44px] text-white md:text-[44px]">
            Find Your Next Course
          </h1>
          <form role="search" onSubmit={(event) => event.preventDefault()} className="flex w-full flex-col gap-4 sm:flex-row">
            <label className="flex h-[52px] flex-1 items-center gap-2 rounded-card bg-white px-6 py-3 focus-within:outline-2 focus-within:outline-electric-400">
              <span className="sr-only">Search courses</span>
              <Image src={assets.icons.search} alt="" width={24} height={24} />
              <input
                type="search"
                name="q"
                value={query}
                placeholder="Search"
                onChange={(event) => {
                  setQuery(event.target.value);
                  setPage(1);
                }}
                className="w-full bg-transparent text-lg leading-[1.6] text-shuttle-950 placeholder:text-shuttle-400 focus:outline-none"
              />
            </label>
            <div className="relative h-12 self-center">
              <select
                aria-label="Search in"
                defaultValue="courses"
                className="h-12 w-[147px] appearance-none rounded-card bg-electric-400 pr-12 pl-6 text-lg leading-[1.2] font-medium text-shuttle-950 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              >
                <option value="courses">Courses</option>
              </select>
              <Icon name="chevronDown" className="pointer-events-none absolute top-3 right-3 text-shuttle-950" />
            </div>
          </form>
        </div>
      </section>

      <section className="bg-white pt-10 pb-16 xl:pt-[72px] xl:pb-[72px]">
        <Container>
          <FilterToolbar />
          <div className="mt-8 flex flex-wrap gap-4" role="group" aria-label="Course categories">
            {searchChips.map((label) => (
              <Chip key={label} label={label} active={label === activeChip} onClick={() => setActiveChip(label)} />
            ))}
          </div>

          {visible.length > 0 ? (
            <ul className="mt-12 grid grid-cols-1 justify-items-center gap-10 md:grid-cols-2 xl:mt-[77px] xl:grid-cols-3">
              {visible.map((course, index) => (
                <li key={`${course.id}-${index}`} className="max-w-full">
                  <CourseCard course={course} />
                </li>
              ))}
            </ul>
          ) : (
            <p className="mt-16 text-center text-lg leading-[1.6] text-shuttle-700">
              No courses found for &ldquo;{query}&rdquo;. Try a different word.
            </p>
          )}

          <div className="mt-12 xl:mt-[72px]">
            <Pagination page={page} pageCount={pageCount} onChange={setPage} />
          </div>
        </Container>
      </section>
    </>
  );
}
