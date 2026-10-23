import { fetchSofa, isAddingToCart, IsFavorites } from "@/lib/data";
import { DotPattern } from "../ui/dot-pattern";
import { cn, formatToman } from "@/lib/utils";
import Image from "next/image";
import { auth } from "@/auth";
import FavoritesButton from "./FavoritesButton";
import AddToCartButton from "./AddToCartButton";
import QuantitySelector from "./QuantitySelector";
import Comments from "./Comments";
import { Suspense } from "react";
import CommentsSkeleton from "./CommentsSkeleton";

async function Sofa({ params }: { params: Promise<{ sofaId?: string }> }) {
  const session = await auth();
  const { sofaId } = await params;

  if (!sofaId) {
    return (
      <div className="flex min-h-64 items-center justify-center px-4">
        <p className="text-center text-lg font-bold text-[#342114]">
          محصول مورد نظر پیدا نشد.
        </p>
      </div>
    );
  }

  const sofa = await fetchSofa(sofaId);

  if (!sofa || sofa.length === 0) {
    return (
      <div className="flex min-h-64 items-center justify-center px-4">
        <p className="text-center text-lg font-bold text-[#342114]">
          محصول مورد نظر پیدا نشد.
        </p>
      </div>
    );
  }

  const userId = session?.user?.id;

  const [isFavorites, cartItems] = userId
    ? await Promise.all([IsFavorites(userId), isAddingToCart(userId)])
    : [[], []];

  const { category, color, description, image, material, name, price, id } =
    sofa[0];

  const [colorName, hex] = color.split("-");

  const is_favorites = isFavorites.some((item) => item.product_id === id);

  const cartItem = cartItems.find((item) => item.product_id === id);

  return (
    <section className="mx-auto mt-4 w-full min-w-0 pb-8 sm:mt-6 sm:w-[90%]">
      {/* عنوان */}
      <div className="mb-4 min-w-0 sm:mb-6">
        <p className="text-xs font-medium text-[#cca26e] sm:text-sm">
          {category}
        </p>

        <h1 className="mt-1 wrap-break-word text-2xl font-bold leading-relaxed text-[#342114] min-[390px]:text-3xl sm:text-4xl">
          مبل {name}
        </h1>
      </div>

      {/* محصول */}
      <div className="min-w-0 rounded-xl bg-white p-2 sm:rounded-2xl sm:p-3">
        <div className="relative min-w-0 overflow-hidden rounded-xl border border-[#342114]/15 p-2 sm:rounded-2xl sm:p-4">
          <DotPattern
            width={20}
            height={20}
            cx={1}
            cy={1}
            cr={1}
            className={cn(
              "pointer-events-none text-[#342114]/30 mask-[linear-gradient(to_bottom_right,white,transparent,transparent)]",
            )}
          />

          <div className="relative z-10 grid min-w-0 grid-cols-1 gap-5 lg:grid-cols-2 lg:gap-8">
            {/* تصویر محصول */}
            <div className="flex min-w-0 items-center justify-center">
              <div className="relative aspect-4/3 w-full overflow-hidden rounded-xl bg-[#f9f4ee] sm:aspect-5/4 lg:aspect-4/3">
                <Image
                  src={image}
                  alt={`مبل ${name}`}
                  fill
                  priority
                  sizes="(max-width: 639px) 100vw, (max-width: 1023px) 90vw, 50vw"
                  className="object-cover"
                />
              </div>
            </div>

            {/* اطلاعات محصول */}
            <div className="flex min-w-0 flex-col py-2 sm:py-4 lg:py-6">
              <div className="min-w-0">
                <h2 className="wrap-break-word text-xl font-bold leading-relaxed text-[#342114] sm:text-2xl lg:text-3xl">
                  {name}
                </h2>

                <p className="mt-3 wrap-break-word text-sm leading-7 text-[#342114]/70 sm:mt-4 sm:text-base">
                  {description}
                </p>

                {/* قیمت */}
                <div className="mt-5 sm:mt-7">
                  <span className="text-xs text-[#342114]/50 sm:text-sm">
                    قیمت
                  </span>

                  <p className="mt-1 wrap-break-word text-2xl font-bold leading-relaxed text-[#5d3a22] sm:text-3xl">
                    {formatToman(price)}
                  </p>
                </div>

                {/* مشخصات */}
                <div className="mt-5 space-y-4 border-y border-[#342114]/10 py-4 sm:mt-7 sm:space-y-5 sm:py-5">
                  <div className="flex items-start justify-between gap-3 text-sm sm:text-base">
                    <span className="shrink-0 text-[#342114]/60">
                      دسته‌بندی
                    </span>
                    <span className="min-w-0 wrap-break-word text-left font-medium text-[#342114]">
                      {category}
                    </span>
                  </div>

                  <div className="flex items-start justify-between gap-3 text-sm sm:text-base">
                    <span className="shrink-0 text-[#342114]/60">جنس</span>
                    <span className="min-w-0 wrap-break-word text-left font-medium text-[#342114]">
                      {material}
                    </span>
                  </div>

                  <div className="flex items-center justify-between gap-3 text-sm sm:text-base">
                    <span className="shrink-0 text-[#342114]/60">رنگ</span>

                    <div className="flex min-w-0 items-center gap-2">
                      <span
                        aria-label={`رنگ ${colorName}`}
                        className="size-6 shrink-0 rounded-full border-2 border-[#C9A66B] sm:size-7"
                        style={{ backgroundColor: hex }}
                      />

                      <span className="wrap-break-word font-medium text-[#342114]">
                        {colorName}
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* دکمه‌ها */}
              <div className="mt-6 grid min-w-0 grid-cols-[minmax(0,1fr)_auto] items-stretch gap-2 sm:mt-8 sm:gap-3">
                <div className="flex min-w-0 items-center">
                  {cartItem ? (
                    <div>
                      <QuantitySelector
                        defultQuantity={Number(cartItem.quantity)}
                        productId={id}
                        userId={userId}
                      />
                    </div>
                  ) : (
                    <div className="w-full">
                      <AddToCartButton userId={userId} productId={id} />
                    </div>
                  )}
                </div>

                <div className="flex shrink-0 items-center justify-center">
                  <FavoritesButton
                    productId={id}
                    userId={userId}
                    is_favorites={is_favorites}
                    isOnPage={true}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* نظرات */}
      <div className="mt-6 min-w-0 sm:mt-8">
        <Suspense fallback={<CommentsSkeleton />}>
          <Comments productId={id} />
        </Suspense>
      </div>
    </section>
  );
}

export default Sofa;
