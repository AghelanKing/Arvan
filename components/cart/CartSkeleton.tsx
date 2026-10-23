import { Skeleton } from "@/components/ui/skeleton";

function CartItemSkeleton() {
  return (
    <li className="flex w-full min-w-0 flex-col gap-4 p-3 sm:p-4 md:grid md:grid-cols-[88px_minmax(0,1fr)_150px_210px] md:items-center md:gap-3 lg:grid-cols-[110px_minmax(0,1fr)_180px_240px] lg:gap-5 lg:px-5">
      {/* تصویر، نام و قیمت */}
      <div className="flex min-w-0 items-center gap-3 sm:gap-4 md:contents">
        <Skeleton className="h-20 w-24 shrink-0 rounded-xl bg-[#e8d2b6] sm:h-24 sm:w-28 md:h-16 md:w-full lg:h-20" />

        <div className="flex min-w-0 flex-1 flex-col gap-2 md:items-center">
          <Skeleton className="h-5 w-3/4 max-w-48 bg-[#e8d2b6] sm:h-6" />

          {/* قیمت موبایل */}
          <Skeleton className="h-4 w-28 bg-[#e8d2b6] md:hidden" />
        </div>

        {/* قیمت دسکتاپ */}
        <div className="hidden justify-center md:flex">
          <Skeleton className="h-5 w-28 bg-[#e8d2b6]" />
        </div>
      </div>

      {/* تعداد و حذف */}
      <div className="flex min-w-0 items-center justify-between gap-3 border-t border-[#54341f]/10 pt-3 sm:justify-start sm:gap-4 md:justify-center md:border-0 md:pt-0">
        <div className="flex items-center gap-2 sm:gap-3">
          <Skeleton className="h-4 w-10 bg-[#e8d2b6] sm:hidden" />

          {/* کنترل تعداد */}
          <Skeleton className="h-10 w-28 rounded-lg bg-[#e8d2b6]" />
        </div>

        {/* دکمه حذف */}
        <Skeleton className="h-9 w-16 shrink-0 rounded-md bg-[#e8d2b6]" />
      </div>
    </li>
  );
}

export default function CartSkeleton() {
  return (
    <div
      dir="rtl"
      aria-label="در حال بارگذاری سبد خرید"
      className="mx-auto mt-6 w-full min-w-0 rounded-2xl bg-white p-2 shadow-sm sm:mt-8 sm:w-[96%] sm:p-3 lg:w-[92%]"
    >
      {/* هدر دسکتاپ */}
      <div className="hidden grid-cols-[88px_minmax(0,1fr)_150px_210px] items-center gap-3 rounded-xl border border-[#342114]/20 bg-[#fcedda] px-4 py-4 md:grid lg:grid-cols-[110px_minmax(0,1fr)_180px_240px] lg:gap-5 lg:px-5">
        {["عکس مبل", "نام مبل", "قیمت", "تعداد و عملیات"].map((title) => (
          <div key={title} className="text-center">
            <Skeleton className="mx-auto h-5 w-20 bg-[#e8d2b6]" />
          </div>
        ))}
      </div>

      {/* ردیف‌های محصولات */}
      <ul className="mt-0 flex w-full min-w-0 flex-col divide-y divide-[#54341f]/15 md:mt-2 md:rounded-xl md:border md:border-[#54341f]/15">
        {Array.from({ length: 3 }).map((_, index) => (
          <CartItemSkeleton key={index} />
        ))}
      </ul>
    </div>
  );
}
