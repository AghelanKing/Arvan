import { Skeleton } from "@/components/ui/skeleton";
import { DotPattern } from "../ui/dot-pattern";
import { cn } from "@/lib/utils";

function SofaCardSkeleton() {
  return (
    <div className="relative overflow-visible rounded-xl border-2 border-[#54341f]/15 p-2">
      {/* تصویر مبل */}
      <Skeleton className="h-60 w-full rounded-xl bg-[#e8d2b6]" />

      {/* نام مبل */}
      <Skeleton className="mt-3 h-9 w-3/4 bg-[#e8d2b6]" />

      {/* قیمت */}
      <Skeleton className="mt-3 h-5 w-1/2 bg-[#e8d2b6]" />

      {/* دسته‌بندی */}
      <Skeleton className="mt-3 h-4 w-1/3 bg-[#e8d2b6]" />

      {/* دکمه مشاهده و علاقه‌مندی */}
      <div className="flex items-center justify-between gap-2">
        <Skeleton className="mt-3 h-10 w-36 max-w-[75%] rounded-full bg-[#e8d2b6]" />

        <Skeleton className="mt-3 size-10 shrink-0 rounded-full bg-[#e8d2b6]" />
      </div>
    </div>
  );
}

export default function SofasSkeleton() {
  return (
    <section className="relative h-full min-w-0 w-full rounded-xl border border-[#54341f] p-2 sm:p-3">
      <DotPattern
        width={20}
        height={20}
        cx={1}
        cy={1}
        cr={1}
        x={10}
        y={10}
        className={cn(
          "mask-[linear-gradient(to_bottom_right,white,transparent,transparent)] text-[#342114]",
        )}
      />

      <div className="grid min-w-0 grid-cols-1 gap-4 min-[600px]:grid-cols-2 xl:grid-cols-3">
        {Array.from({ length: 9 }).map((_, index) => (
          <SofaCardSkeleton key={index} />
        ))}
      </div>

      {/* صفحه‌بندی */}
      <div className="mt-6 flex items-center justify-center gap-2">
        <Skeleton className="size-9 rounded-md bg-[#e8d2b6]" />
        <Skeleton className="size-9 rounded-md bg-[#e8d2b6]" />
        <Skeleton className="size-9 rounded-md bg-[#e8d2b6]" />
        <Skeleton className="size-9 rounded-md bg-[#e8d2b6]" />
      </div>
    </section>
  );
}
