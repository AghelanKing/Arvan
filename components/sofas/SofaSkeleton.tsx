import { Skeleton } from "@/components/ui/skeleton";

export default function SofaSkeleton() {
  return (
    <section
      dir="rtl"
      className="mx-auto mt-4 w-full min-w-0 space-y-4 pb-8 sm:mt-6 sm:w-[90%] sm:space-y-6"
    >
      {/* عنوان و دسته‌بندی */}
      <div className="space-y-2">
        <Skeleton className="h-4 w-20 bg-[#e8d2b6]" />
        <Skeleton className="h-9 w-3/4 max-w-sm bg-[#e8d2b6] sm:h-11" />
      </div>

      {/* محتوای محصول */}
      <div className="rounded-xl bg-white p-2 sm:rounded-2xl sm:p-3">
        <div className="rounded-xl border border-[#342114]/15 p-2 sm:rounded-2xl sm:p-4">
          <div className="grid min-w-0 grid-cols-1 gap-5 lg:grid-cols-2 lg:gap-8">
            {/* تصویر */}
            <Skeleton className="aspect-[4/3] w-full rounded-xl bg-[#e8d2b6]" />

            {/* اطلاعات محصول */}
            <div className="flex min-w-0 flex-col space-y-5 py-2 sm:py-4 lg:py-6">
              <div className="space-y-3">
                <Skeleton className="h-8 w-3/4 bg-[#e8d2b6]" />
                <Skeleton className="h-4 w-full bg-[#e8d2b6]" />
                <Skeleton className="h-4 w-full bg-[#e8d2b6]" />
                <Skeleton className="h-4 w-2/3 bg-[#e8d2b6]" />
              </div>

              {/* قیمت */}
              <div className="space-y-2">
                <Skeleton className="h-4 w-16 bg-[#e8d2b6]" />
                <Skeleton className="h-9 w-40 bg-[#e8d2b6]" />
              </div>

              {/* مشخصات */}
              <div className="space-y-5 border-y border-[#342114]/10 py-5">
                {Array.from({ length: 3 }).map((_, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between gap-4"
                  >
                    <Skeleton className="h-4 w-20 bg-[#e8d2b6]" />
                    <Skeleton className="h-4 w-24 bg-[#e8d2b6]" />
                  </div>
                ))}
              </div>

              {/* دکمه‌ها */}
              <div className="grid grid-cols-[minmax(0,1fr)_auto] gap-3">
                <Skeleton className="h-12 w-full rounded-lg bg-[#e8d2b6]" />
                <Skeleton className="size-12 rounded-lg bg-[#e8d2b6]" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
