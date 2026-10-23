import { Skeleton } from "@/components/ui/skeleton";

function FavoriteCardSkeleton() {
  return (
    <li className="flex min-w-0 flex-col overflow-hidden rounded-2xl border border-[#54341f]/15 bg-white p-3 sm:p-4">
      {/* تصویر مبل */}
      <Skeleton className="aspect-[5/3] w-full rounded-xl bg-[#e8d2b6]" />

      {/* اطلاعات محصول */}
      <div className="mt-3 flex flex-1 flex-col">
        <Skeleton className="h-5 w-3/4 bg-[#e8d2b6] sm:h-6" />

        <Skeleton className="mt-3 h-6 w-20 rounded-lg bg-[#e8d2b6]" />

        <Skeleton className="mt-3 h-6 w-1/2 bg-[#e8d2b6] sm:h-7" />
      </div>

      {/* دکمه حذف */}
      <div className="mt-4 border-t border-[#54341f]/10 pt-3">
        <Skeleton className="h-10 w-full rounded-md bg-[#e8d2b6]" />
      </div>
    </li>
  );
}

export default function FavoritesSkeleton() {
  return (
    <div
      dir="rtl"
      aria-label="در حال بارگذاری علاقه‌مندی‌ها"
      className="mx-auto mt-7 w-full min-w-0 max-w-7xl"
    >
      {/* عنوان و تعداد محصولات */}
      <div className="mb-4 flex items-center justify-between gap-3">
        <Skeleton className="h-7 w-44 max-w-[65%] bg-[#e8d2b6]" />
        <Skeleton className="h-7 w-20 shrink-0 rounded-full bg-[#e8d2b6]" />
      </div>

      {/* کارت‌ها */}
      <ul className="grid min-w-0 grid-cols-1 gap-3 min-[520px]:grid-cols-2 sm:gap-4 lg:grid-cols-3 xl:grid-cols-4">
        {Array.from({ length: 8 }).map((_, index) => (
          <FavoriteCardSkeleton key={index} />
        ))}
      </ul>
    </div>
  );
}
