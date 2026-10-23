"use client";

import { useState } from "react";
import { Slider } from "../ui/Slider";
import { formatToman } from "@/lib/utils";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

function PriceFilter({ min, max }: { min: number; max: number }) {
  const [price, setPrice] = useState<number[]>([min, max]);

  const pathname = usePathname();
  const searchParams = useSearchParams();
  const router = useRouter();

  function handlePriceChange(value: number[]) {
    const params = new URLSearchParams(searchParams);

    params.set("minPrice", String(value[0]));
    params.set("maxPrice", String(value[1]));

    params.delete("page");

    router.push(`${pathname}?${params.toString()}`);
  }

  return (
    <div className="flex flex-col w-full mt-3">
      <h5 className="text-[#71492f] text-lg mb-1 font-semibold mr-3 mt-3">
        محدوده قیمت
      </h5>

      <div className="mt-5 px-2">
        <Slider
          dir="ltr"
          value={price}
          onValueChange={(value) => {
            if (Array.isArray(value)) {
              const newPrice = [...value];

              setPrice(newPrice);
              handlePriceChange(newPrice);
            }
          }}
          min={min}
          max={max}
          step={500_000}
        />
      </div>

      <div
        className="flex justify-between mt-4 text-sm text-[#342114]"
        dir="ltr"
      >
        <span>{formatToman(price[0])}</span>

        <span>{formatToman(price[1])}</span>
      </div>
    </div>
  );
}

export default PriceFilter;
