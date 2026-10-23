import CartList from "@/components/cart/CartList";
import CartSkeleton from "@/components/cart/CartSkeleton";
import TotalCartPrice from "@/components/cart/TotalCartPrice";
import { SpinnerLoading } from "@/components/ui/SpinnerLoading";
import { Metadata } from "next";
import { Suspense } from "react";

export const metadata: Metadata = {
  title: "سبد خرید",
};

export default function Page() {
  return (
    <section className="mx-auto w-[96%] min-w-0 py-5 sm:w-[92%] sm:py-7 lg:w-[90%]">
      <div className="flex w-full flex-col items-center">
        <h1 className="relative mt-2 text-center text-2xl font-bold text-[#342114] sm:mt-3 sm:text-3xl lg:text-4xl">
          سبد خرید شما
        </h1>
      </div>

      <Suspense fallback={<CartSkeleton />}>
        <CartList />
      </Suspense>

      <Suspense
        fallback={
          <div className="flex items-center justify-center w-full h-full">
            <SpinnerLoading />
          </div>
        }
      >
        <TotalCartPrice />
      </Suspense>
    </section>
  );
}
