import { fatchSofas, fetchSofasCount, IsFavorites } from "@/lib/data";
import SofasCard from "../ui/SofasCard";
import Pagination from "./Pagination";
import { DotPattern } from "../ui/dot-pattern";
import { cn } from "cn";
import FavoritesButton from "./FavoritesButton";
import { auth } from "@/auth";

async function ShownSofas({
  page,
  category,
  color,
  material,
  minPrice,
  maxPrice,
}: {
  page: number;
  category: string;
  color: string;
  material: string;
  minPrice: number;
  maxPrice: number;
}) {
  const session = await auth();

  const [sofas, totalSofas] = await Promise.all([
    fatchSofas(page, category, color, material, minPrice, maxPrice),
    fetchSofasCount(category, color, material, minPrice, maxPrice),
  ]);

  const isFavorites = session?.user?.id
    ? await IsFavorites(session.user.id)
    : [];

  const productsPerPage = 9;
  const totalPages = Math.ceil(totalSofas / productsPerPage);

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
        {sofas.map((sofa) => {
          const is_favorites = isFavorites.some(
            (item) => item.product_id === sofa.id,
          );
          return (
            <SofasCard href={`/sofas/${sofa.id}`} key={sofa.id} item={sofa}>
              <FavoritesButton
                productId={sofa.id}
                userId={session?.user?.id}
                is_favorites={is_favorites}
              />
              {sofa.is_featured && (
                <span className="absolute -top-4 -right-4 bg-[#54341f] p-2 rounded-tl-2xl rounded-br-2xl text-[#f9f4ee]">
                  مبل منتخب
                </span>
              )}
            </SofasCard>
          );
        })}
      </div>

      {totalPages > 0 && <Pagination totalPage={totalPages} />}
    </section>
  );
}

export default ShownSofas;
