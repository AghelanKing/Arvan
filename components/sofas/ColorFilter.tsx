"use client";

import Link from "next/link";
import { usePathname, useSearchParams } from "next/navigation";
function ColorFilter({ colors }: { colors: { color: string }[] }) {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const createPageURL = (color: string = "all") => {
    const params = new URLSearchParams(searchParams);
    params.set("page", "1");
    if (color) params.set("color", color.toString());
    else params.delete("color");

    return `${pathname}?${params.toString()}`;
  };

  return (
    <div className="flex flex-col w-full mt-3">
      <h5 className="text-[#71492f] text-lg mb-1 font-semibold mr-3 mt-3">
        فیلتر براساس رنگ
      </h5>
      <div className="flex flex-wrap gap-2 mt-3!">
        {colors.map((color) => {
          const [colorName, hex] = color.color.split("-");
          const pageURL = createPageURL(color.color);
          return (
            <Link
              href={pageURL}
              key={hex}
              className="py-1 px-3 rounded-full text-[#C9A66B]"
              style={{ backgroundColor: `${hex}` }}
            >
              {colorName}
            </Link>
          );
        })}
      </div>
    </div>
  );
}

export default ColorFilter;
