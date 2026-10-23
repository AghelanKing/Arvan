import DeleteButtons from "@/components/account/DeleteButtons";
import Info from "@/components/account/Info";
import { Metadata } from "next";
import { Suspense } from "react";

export const metadata: Metadata = {
  title: "پروفایل",
};

export default function Page() {
  return (
    <section className="p-7">
      <div className="flex flex-col items-center w-full">
        <h1 className="text-4xl text-[#342114] font-bold mt-3 relative">
          پروفایل
        </h1>
      </div>

      <Suspense fallback={<p>Loading</p>}>
        <Info />
      </Suspense>

      <Suspense fallback={<p>Loading</p>}>
        <DeleteButtons />
      </Suspense>
    </section>
  );
}
