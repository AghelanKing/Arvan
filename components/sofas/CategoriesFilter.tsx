"use client";

import Link from "next/link";
import { categoriesData } from "../ui/Categories";
import { InteractiveHoverButton } from "../magicui/interactive-hover-button";
import { usePathname, useSearchParams } from "next/navigation";

function CategoriesFilter() {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const createPageURL = (category: string = "all") => {
    const params = new URLSearchParams(searchParams);
    params.set("page", "1");

    if (category) params.set("category", category.toString());
    else params.delete("category");

    return `${pathname}?${params.toString()}`;
  };

  return (
    <div className="flex flex-col w-full mt-3">
      <h5 className="text-[#71492f] text-lg mb-1 font-semibold mr-3 mt-3">
        دسته بندی محصولات
      </h5>
      {categoriesData.map((item) => {
        const pageURL = createPageURL(item.label);
        return (
          <Link href={pageURL} key={item.label}>
            <InteractiveHoverButton className="text-[#342114] mt-1 border-none! py-0.5! justify-start! bg-transparent!">
              {item.label}
            </InteractiveHoverButton>
          </Link>
        );
      })}
    </div>
  );
}

export default CategoriesFilter;
