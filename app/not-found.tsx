import Link from "next/link";
import { Home, Search, Sofa } from "lucide-react";

export default function NotFound() {
  return (
    <main
      dir="rtl"
      className="flex min-h-[75vh] w-full items-center justify-center px-5 py-12"
    >
      <div className="flex w-full max-w-xl flex-col items-center text-center">
        {/* Illustration */}
        <div className="relative mb-6 flex size-36 items-center justify-center rounded-full bg-[#fcedda]">
          <Sofa size={68} strokeWidth={1.4} className="text-[#895939]" />

          <span className="absolute -right-1 top-2 flex size-12 items-center justify-center rounded-full border-4 border-white bg-[#cca26e] text-xl font-bold text-white">
            !
          </span>
        </div>

        {/* Error Code */}
        <p className="mb-3 text-7xl font-black tracking-wider text-[#895939] sm:text-8xl">
          404
        </p>

        <h1 className="text-2xl font-bold text-[#342114] sm:text-3xl">
          اینجا چیزی برای پیدا کردن نیست!
        </h1>

        <p className="mt-4 max-w-md text-sm leading-7 text-[#765b46] sm:text-base">
          انگار این صفحه جاش رو عوض کرده! آدرسی که دنبالش هستی پیدا نشد. می‌تونی
          به صفحه اصلی برگردی یا دوباره محصولات آروان رو ببینی.
        </p>

        {/* Actions */}
        <div className="mt-8 flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
          <Link
            href="/"
            className="flex items-center justify-center gap-2 rounded-xl bg-[#895939] px-6 py-3 font-medium text-white transition-colors hover:bg-[#684128]"
          >
            <Home size={19} />
            بازگشت به صفحه اصلی
          </Link>

          <Link
            href="/sofas"
            className="flex items-center justify-center gap-2 rounded-xl border border-[#54341f]/25 bg-white px-6 py-3 font-medium text-[#54341f] transition-colors hover:bg-[#fcedda]"
          >
            <Search size={19} />
            مشاهده محصولات
          </Link>
        </div>

        <p className="mt-10 text-sm text-[#a18a75]">
          ARVAN — خانه‌ات، داستان توست.
        </p>
      </div>
    </main>
  );
}
