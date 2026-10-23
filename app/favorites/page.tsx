import FavoritesList from "@/components/favorites/favoritesList";
import FavoritesSkeleton from "@/components/favorites/FavoritesSkeleton";
import { Metadata } from "next";
import { Suspense } from "react";

export const metadata: Metadata = {
  title: "علاقه مندی ها",
};

export default function Page() {
  return (
    <section className="mx-auto w-full min-w-0 px-3 py-6 sm:px-5 sm:py-8 lg:px-7">
      <div className="mx-auto flex w-full flex-col items-center text-center">
        <h1 className="relative mt-3 text-2xl font-bold text-[#342114] min-[390px]:text-3xl sm:text-4xl">
          علاقه‌مندی‌های شما
        </h1>

        <p className="mx-auto mt-3 max-w-2xl text-sm leading-7 text-[#342114]/80 sm:text-base">
          در این بخش می‌توانید تمام مبلمانی را که پسندیده‌اید، یکجا مشاهده کنید.
          محصولات موردعلاقه‌تان را بررسی کنید، جزئیات و قیمت آن‌ها را ببینید و
          هر زمان خواستید، گزینه‌های دلخواهتان را به سبد خرید اضافه کنید. در
          آروان، انتخاب خانه‌ای زیباتر از همین‌جا شروع می‌شود.
        </p>
      </div>

      <Suspense fallback={<FavoritesSkeleton />}>
        <FavoritesList />
      </Suspense>
    </section>
  );
}
