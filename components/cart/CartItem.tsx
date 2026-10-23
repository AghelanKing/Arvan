"use client";

import { Cart } from "@/lib/difintions";
import { formatToman } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import QuantitySelector from "../sofas/QuantitySelector";
import { deleteCartItem } from "@/app/sofas/action";
import { useState } from "react";
import DeleteDialog from "../ui/DeleteDialog";
import { Button } from "../ui/button";
import { FiTrash2 } from "react-icons/fi";
import toast from "react-hot-toast";

function CartItem({ item, userId }: { item: Cart; userId?: string }) {
  const [isLoading, setIsLoading] = useState(false);

  const handleDelete = async () => {
    setIsLoading(true);

    try {
      await deleteCartItem(item.id, userId);
      toast.success("محصول با موفقیت از سبد خرید حذف شد.");
    } catch (error) {
      console.error("خطا در حذف محصول از سبد خرید:", error);
      toast.error("حذف محصول از سبد خرید با خطا مواجه شد");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <li className="flex w-full min-w-0 flex-col gap-4 p-3 transition-colors hover:bg-[#fcedda]/50 sm:p-4 md:grid md:grid-cols-[88px_minmax(0,1fr)_150px_210px] md:items-center md:gap-3 lg:grid-cols-[110px_minmax(0,1fr)_180px_240px] lg:gap-5 lg:px-5">
      {/* عکس، نام و قیمت محصول */}
      <Link
        href={`/sofas/${item.id}`}
        className="flex min-w-0 items-center gap-3 sm:gap-4 md:contents"
      >
        <div className="relative h-20 w-24 shrink-0 overflow-hidden rounded-xl sm:h-24 sm:w-28 md:h-16 md:w-full lg:h-20">
          <Image
            src={item.image}
            alt={`مبل ${item.name}`}
            fill
            sizes="(max-width: 639px) 112px, (max-width: 1023px) 88px, 110px"
            className="object-cover"
          />
        </div>

        <div className="flex min-w-0 flex-1 flex-col justify-center gap-2 md:items-center">
          <h2 className="line-clamp-2 wrap-break-words text-sm font-bold text-[#342114] sm:text-base md:text-center lg:text-lg">
            {item.name}
          </h2>

          {/* قیمت در موبایل زیر نام نمایش داده می‌شود */}
          <p className="text-sm font-medium text-[#5d3a22] sm:text-base md:hidden">
            {formatToman(item.price)}
          </p>
        </div>

        {/* قیمت مخصوص نمایشگرهای متوسط و بزرگ */}
        <div className="hidden min-w-0 justify-center md:flex">
          <p className="text-center text-sm font-medium text-[#5d3a22] lg:text-base">
            {formatToman(item.price)}
          </p>
        </div>
      </Link>

      {/* تعداد و حذف محصول */}
      <div className="flex min-w-0 items-center justify-between gap-3 border-t border-[#54341f]/10 pt-3 sm:justify-start sm:gap-4 md:justify-center md:border-0 md:pt-0">
        <div className="flex min-w-0 items-center gap-2 sm:gap-3">
          <span className="text-xs font-medium text-[#895939] sm:hidden">
            تعداد:
          </span>

          <QuantitySelector
            productId={item.id}
            userId={userId}
            defultQuantity={item.quantity}
          />
        </div>

        <DeleteDialog
          handleDelete={handleDelete}
          title="حذف محصول"
          description="این محصول از سبد خرید شما حذف خواهد شد. آیا می‌خواهید ادامه دهید؟"
        >
          <Button
            type="button"
            variant="destructive"
            disabled={isLoading}
            className="shrink-0 cursor-pointer gap-1.5 px-3"
          >
            <FiTrash2 className="size-4" />
            <span className="text-xs sm:text-sm">
              {isLoading ? "در حال حذف..." : "حذف"}
            </span>
          </Button>
        </DeleteDialog>
      </div>
    </li>
  );
}

export default CartItem;
