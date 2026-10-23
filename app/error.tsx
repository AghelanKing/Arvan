"use client";

import { useEffect } from "react";
import { AlertTriangle, RefreshCw, Home } from "lucide-react";
import Link from "next/link";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <main
      dir="rtl"
      className="flex min-h-[75vh] w-full items-center justify-center px-5 py-12"
    >
      <div className="flex w-full max-w-xl flex-col items-center text-center">
        <div className="mb-6 flex size-28 items-center justify-center rounded-full bg-[#fcedda]">
          <AlertTriangle
            size={58}
            strokeWidth={1.5}
            className="text-[#895939]"
          />
        </div>

        <p className="mb-3 text-6xl font-black text-[#895939] sm:text-7xl">
          اوه!
        </p>

        <h1 className="text-2xl font-bold text-[#342114] sm:text-3xl">
          مشکلی پیش اومده!
        </h1>

        <p className="mt-4 max-w-md text-sm leading-7 text-[#765b46] sm:text-base">
          متأسفانه هنگام نمایش این صفحه مشکلی رخ داده. می‌تونی دوباره تلاش کنی
          یا به صفحه اصلی آروان برگردی.
        </p>

        <div className="mt-8 flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
          <button
            onClick={() => reset()}
            className="flex items-center justify-center gap-2 rounded-xl bg-[#895939] px-6 py-3 font-medium text-white transition-colors hover:bg-[#684128]"
          >
            <RefreshCw size={19} />
            تلاش دوباره
          </button>

          <Link
            href="/"
            className="flex items-center justify-center gap-2 rounded-xl border border-[#54341f]/25 bg-white px-6 py-3 font-medium text-[#54341f] transition-colors hover:bg-[#fcedda]"
          >
            <Home size={19} />
            صفحه اصلی
          </Link>
        </div>

        {error.digest && (
          <p className="mt-6 text-xs text-[#a18a75]" dir="ltr">
            Error ID: {error.digest}
          </p>
        )}

        <p className="mt-8 text-sm text-[#a18a75]">
          ARVAN — خانه‌ات، داستان توست.
        </p>
      </div>
    </main>
  );
}
