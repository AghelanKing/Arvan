import {
  fetchPriceRange,
  fetchSofasColor,
  fetchSofasMaterial,
} from "@/lib/data";
import CategoriesFilter from "./CategoriesFilter";
import ColorFilter from "./ColorFilter";
import MaterialFilter from "./MaterialFilter";
import PriceFilter from "./PriceFilter";

async function AsideSection() {
  const colors = await fetchSofasColor();
  const materials = await fetchSofasMaterial();
  const { min, max } = await fetchPriceRange();

  return (
    <aside className="w-full border border-[#54341f] rounded-xl p-2">
      <h3 className="text-[#54341f] text-2xl font-semibold mr-3 mt-3">
        فیلتر مبلمان
      </h3>

      <CategoriesFilter />
      <ColorFilter colors={colors} />
      <MaterialFilter materials={materials} />
      <PriceFilter min={min} max={max} />
    </aside>
  );
}

export default AsideSection;
