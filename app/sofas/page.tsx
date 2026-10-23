import AsideSection from "@/components/sofas/AsideSection";
import ShownFilters from "@/components/sofas/ShownFilters";
import ShownSofas from "@/components/sofas/ShownSofas";
import SofaFiltersSheet from "@/components/sofas/SofaFiltersSheet";
import SofasSkeleton from "@/components/sofas/SofasSkeleton";
import { SpinnerLoading } from "@/components/ui/SpinnerLoading";

import { fetchPriceRange } from "@/lib/data";
import { Suspense } from "react";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "مبمان",
};

type PageProps = {
  searchParams: Promise<{
    page?: string;
    category?: string;
    color?: string;
    material?: string;
    minPrice?: string;
    maxPrice?: string;
  }>;
};

export default async function Page({ searchParams }: PageProps) {
  return (
    <section className="w-full min-w-0 px-3 py-5 sm:px-5 sm:py-7 lg:p-7">
      <div className="flex w-full flex-col items-center text-center">
        <h1 className="relative mt-3 text-2xl font-bold text-[#342114] min-[390px]:text-3xl sm:text-4xl">
          مجموعه مبلمان آروان
        </h1>

        <p className="mt-3 max-w-2xl text-sm leading-7 text-[#342114] sm:text-base">
          ترکیبی از طراحی، راحتی و زیبایی برای ساختن فضایی که دوست دارید.
        </p>
      </div>

      <div className="mt-6 min-w-0">
        <Suspense fallback={<p>در حال بارگذاری فیلترها...</p>}>
          <ShownFilter searchParams={searchParams} />
        </Suspense>
      </div>

      <main className="mt-3 grid w-full min-w-0 grid-cols-1 gap-3 rounded-xl bg-white p-2 sm:p-3 lg:grid-cols-[280px_minmax(0,1fr)]">
        <div className="min-w-0 lg:hidden">
          <SofaFiltersSheet>
            <AsideSection />
          </SofaFiltersSheet>
        </div>

        <div className="hidden min-w-0 lg:col-start-1 lg:row-start-1 lg:block">
          <Suspense
            fallback={
              <div className="flex items-center justify-center">
                <SpinnerLoading />
              </div>
            }
          >
            <AsideSection />
          </Suspense>
        </div>

        {/* محصولات */}
        <div className="min-w-0 lg:col-start-2 lg:row-start-1">
          <Suspense fallback={<SofasSkeleton />}>
            <SofasWithPagination searchParams={searchParams} />
          </Suspense>
        </div>
      </main>
    </section>
  );
}

async function SofasWithPagination({
  searchParams,
}: {
  searchParams: PageProps["searchParams"];
}) {
  const { min, max } = await fetchPriceRange();
  const { page, category, color, material, minPrice, maxPrice } =
    await searchParams;
  const currentPage = Number(page) || 1;

  const currentCategory = category || "all";
  const currentColor = color || "all";

  const currentMaterial = material || "all";

  const minPriceGet = Number(minPrice) || min;
  const maxPriceGet = Number(maxPrice) || max;

  return (
    <ShownSofas
      page={currentPage}
      category={currentCategory}
      color={currentColor}
      material={currentMaterial}
      minPrice={minPriceGet}
      maxPrice={maxPriceGet}
    />
  );
}

async function ShownFilter({
  searchParams,
}: {
  searchParams: PageProps["searchParams"];
}) {
  const { category, color, material, minPrice, maxPrice } = await searchParams;

  const filters = [
    { filter: "category", value: category },
    { filter: "color", value: color },
    { filter: "material", value: material },
    { filter: "minPrice", value: minPrice },
    { filter: "maxPrice", value: maxPrice },
  ];

  const isFilterValue =
    category || color || material || minPrice || maxPrice || null;

  return <ShownFilters filters={filters} isFilterValue={isFilterValue} />;
}
