"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { Button } from "../ui/button";
import { X } from "lucide-react";

function ShownFilters({
  filters,
  isFilterValue,
}: {
  filters: { filter: string; value: string | null | undefined }[];
  isFilterValue: string | boolean | null;
}) {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const router = useRouter();

  const activeFilters = filters.filter(
    (filter) => filter.value && filter.value !== "all",
  );

  const deleteFilter = (filter: string) => {
    const params = new URLSearchParams(searchParams.toString());

    params.delete(filter);

    // با حذف محدوده قیمت، صفحه‌بندی هم از ابتدا شروع شود
    params.delete("page");

    const query = params.toString();
    router.push(query ? `${pathname}?${query}` : pathname);
  };

  if (!isFilterValue || activeFilters.length === 0) return null;

  return (
    <section className="relative mt-4 w-full min-w-0 rounded-xl bg-white p-2 sm:mt-6 sm:p-3">
      <div className="flex min-w-0 flex-col gap-2 rounded-lg border border-[#54341f] p-2 sm:flex-row sm:items-start sm:gap-3">
        <h3 className="shrink-0 px-1 pt-1 text-sm font-semibold text-[#d0a76e] sm:text-base">
          فیلترهای فعال:
        </h3>

        <div className="flex min-w-0 flex-wrap items-center gap-2">
          {activeFilters.map((filter) => (
            <span
              key={filter.filter}
              className="inline-flex max-w-full min-w-0 items-center gap-1 rounded-lg border border-[#54341f]/70 bg-[#f9f4ee] py-1 pl-1 pr-2"
            >
              <span className="min-w-0 break-words text-xs font-medium text-[#54341f] min-[390px]:text-sm">
                {filter.value}
              </span>

              <Button
                type="button"
                variant="ghost"
                size="icon"
                aria-label={`حذف فیلتر ${filter.value}`}
                onClick={() => deleteFilter(filter.filter)}
                className="size-6 shrink-0 rounded-md text-[#54341f] hover:bg-[#d9b07f] sm:size-7"
              >
                <X className="size-3.5" />
              </Button>
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ShownFilters;
