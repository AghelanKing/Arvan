import { Skeleton } from "@/components/ui/skeleton";

export default function CommentsSkeleton() {
  return (
    <section
      dir="rtl"
      aria-label="در حال بارگذاری نظرات"
      className="mt-8 rounded-2xl border border-[#342114]/10 bg-white p-5 shadow-sm sm:p-7"
    >
      {/* عنوان */}
      <div className="flex items-center gap-3">
        <Skeleton className="size-12 shrink-0 rounded-xl bg-[#e8d2b6]" />

        <div className="flex-1 space-y-2">
          <Skeleton className="h-7 w-36 bg-[#e8d2b6]" />
          <Skeleton className="h-4 w-56 max-w-full bg-[#e8d2b6]" />
        </div>
      </div>

      <div className="my-6 h-px bg-[#342114]/10" />

      {/* فرم ثبت نظر */}
      <div className="space-y-4">
        <Skeleton className="h-5 w-24 bg-[#e8d2b6]" />
        <Skeleton className="h-24 w-full rounded-xl bg-[#e8d2b6]" />
        <Skeleton className="h-10 w-32 rounded-lg bg-[#e8d2b6]" />
      </div>

      <div className="my-6 h-px bg-[#342114]/10" />

      {/* عنوان دیدگاه‌ها */}
      <div className="mb-5 flex items-center justify-between">
        <Skeleton className="h-6 w-24 bg-[#e8d2b6]" />
        <Skeleton className="h-8 w-16 rounded-lg bg-[#e8d2b6]" />
      </div>

      {/* کارت‌های نظر */}
      <div className="space-y-5">
        {Array.from({ length: 3 }).map((_, index) => (
          <article
            key={index}
            className="rounded-xl border border-[#342114]/10 p-4 sm:p-5"
          >
            <div className="flex items-start gap-3">
              <Skeleton className="size-10 shrink-0 rounded-full bg-[#e8d2b6]" />

              <div className="min-w-0 flex-1 space-y-3">
                <div className="flex items-center justify-between gap-3">
                  <Skeleton className="h-5 w-24 bg-[#e8d2b6]" />
                  <Skeleton className="h-4 w-20 bg-[#e8d2b6]" />
                </div>

                <Skeleton className="h-4 w-full bg-[#e8d2b6]" />
                <Skeleton className="h-4 w-4/5 bg-[#e8d2b6]" />

                <Skeleton className="h-8 w-24 rounded-lg bg-[#e8d2b6]" />

                {/* پاسخ نمونه */}
                {index === 0 && (
                  <div className="space-y-3 border-r-2 border-[#cca26e] pr-4">
                    <Skeleton className="h-4 w-20 bg-[#e8d2b6]" />
                    <Skeleton className="h-4 w-full bg-[#e8d2b6]" />
                  </div>
                )}
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
