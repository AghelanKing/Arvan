"use client";

import Link from "next/link";
import { usePathname, useSearchParams } from "next/navigation";
function MaterialFilter({ materials }: { materials: { material: string }[] }) {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const createPageURL = (material: string = "all") => {
    const params = new URLSearchParams(searchParams);
    params.set("page", "1");

    if (material) params.set("material", material.toString());
    else params.delete("material");

    return `${pathname}?${params.toString()}`;
  };

  return (
    <div className="flex flex-col w-full mt-3">
      <h5 className="text-[#71492f] text-lg mb-1 font-semibold mr-3 mt-3">
        فیلتر براساس جنس
      </h5>
      <div className="flex gap-2">
        {materials.map((material) => {
          const pageURL = createPageURL(material.material);
          return (
            <Link
              href={pageURL}
              key={material.material}
              className="py-1 px-3 rounded-full text-[#71492f] bg-[#f9f4ee] border border-[#71492f] w-1/2 text-center hover:bg-[#71492f] hover:text-[#f9f4ee]"
            >
              {material.material}
            </Link>
          );
        })}
      </div>
    </div>
  );
}

export default MaterialFilter;
