"use client";

import { paginationGenerator } from "@/lib/utils";
import Link from "next/link";
import { usePathname, useSearchParams } from "next/navigation";
import { RiArrowLeftLine, RiArrowRightLine } from "react-icons/ri";

function Pagination({ totalPage }: { totalPage: number }) {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const currentPage = Number(searchParams.get("page")) || 1;

  const createPageURL = (pageNumber: number | string) => {
    const params = new URLSearchParams(searchParams.toString());

    params.set("page", String(pageNumber || 1));

    return `${pathname}?${params.toString()}`;
  };

  if (totalPage <= 1) return null;

  const allPages = paginationGenerator(totalPage, currentPage);

  return (
    <nav
      aria-label="صفحه‌بندی محصولات"
      className="mt-4 flex w-full min-w-0 items-center justify-center gap-1 p-1 min-[390px]:gap-2 sm:gap-3"
    >
      <PaginationArrow
        dir="right"
        href={createPageURL(currentPage - 1)}
        isDisabled={currentPage <= 1}
      />

      <div className="flex min-w-0 items-center justify-center gap-1 min-[390px]:gap-1.5 sm:gap-2">
        {allPages.map((page, index) => {
          const middle = page === "...";

          return (
            <PaginationContent
              key={`${page}-${index}`}
              page={page}
              href={createPageURL(page)}
              middle={middle}
              isActive={currentPage === page}
            />
          );
        })}
      </div>

      <PaginationArrow
        dir="left"
        href={createPageURL(currentPage + 1)}
        isDisabled={currentPage >= totalPage}
      />
    </nav>
  );
}

function PaginationContent({
  page,
  href,
  middle,
  isActive,
}: {
  page: number | string;
  href: string;
  middle: boolean;
  isActive: boolean;
}) {
  const className = `
    flex size-8 shrink-0 items-center justify-center rounded-lg
    border border-[#8B6F47] bg-[#f9f4ee]
    text-sm font-semibold text-[#8B6F47]
    transition-colors
    min-[390px]:size-9 min-[390px]:text-base
    sm:size-10 sm:rounded-xl sm:text-lg
    ${
      isActive
        ? "border-[#8B6F47] bg-[#8B6F47] text-[#f9f4ee]"
        : "hover:bg-[#8B6F47] hover:text-[#f9f4ee]"
    }
    ${
      middle
        ? "border-transparent bg-transparent px-0 text-[#d0a76e] hover:bg-transparent hover:text-[#d0a76e]"
        : ""
    }
  `;

  if (middle) {
    return (
      <span aria-hidden="true" className={className}>
        ...
      </span>
    );
  }

  return (
    <Link
      href={href}
      aria-current={isActive ? "page" : undefined}
      aria-label={`صفحه ${page}`}
      className={className}
    >
      {page}
    </Link>
  );
}

function PaginationArrow({
  dir,
  href,
  isDisabled,
}: {
  dir: "right" | "left";
  href: string;
  isDisabled: boolean;
}) {
  const icon = dir === "right" ? <RiArrowRightLine /> : <RiArrowLeftLine />;

  const className = `
    flex size-8 shrink-0 items-center justify-center rounded-lg
    border border-[#8B6F47] bg-[#f9f4ee]
    text-lg text-[#8B6F47] transition-colors
    min-[390px]:size-9 sm:size-10 sm:rounded-xl sm:text-xl
    ${
      isDisabled
        ? "cursor-not-allowed border-[#d0a76e] text-[#d0a76e]"
        : "hover:bg-[#8B6F47] hover:text-[#f9f4ee]"
    }
  `;

  if (isDisabled) {
    return (
      <span aria-disabled="true" className={className}>
        {icon}
      </span>
    );
  }

  return (
    <Link
      href={href}
      aria-label={dir === "right" ? "صفحه قبلی" : "صفحه بعدی"}
      className={className}
    >
      {icon}
    </Link>
  );
}

export default Pagination;
