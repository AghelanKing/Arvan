"use client";

import { Favorites } from "@/lib/difintions";
import { formatToman } from "@/lib/utils";
import Image from "next/image";
import { Button } from "../ui/button";
import { FiTrash2 } from "react-icons/fi";
import Link from "next/link";
import { DeleteFavorites } from "@/app/favorites/action";
import DeleteDialog from "../ui/DeleteDialog";
import { useState } from "react";
import toast from "react-hot-toast";

function FavoritesItem({
  favorite,
  userId,
}: {
  favorite: Favorites;
  userId?: string;
}) {
  const [isLoading, setIsLoading] = useState(false);

  const handleDelete = async () => {
    if (isLoading) return;

    setIsLoading(true);

    try {
      await DeleteFavorites(favorite.id, userId);
      toast.success("محصول با موفقیت از علاقه مندی های شما حذف شد.");
    } catch (error) {
      console.error("Failed to delete favorite:", error);
      toast.success("حذف محصول از علاقه مندی ها با خطا مواجه شد.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <li className="group flex min-w-0 flex-col overflow-hidden rounded-2xl border border-[#54341f]/15 bg-white transition-colors hover:border-[#54341f]/40 hover:bg-[#fdfaf6]">
      <Link
        href={`/sofas/${favorite.id}`}
        className="flex min-w-0 flex-1 flex-col p-3 focus-visible:outline-2 focus-visible:outline-offset-[-3px] focus-visible:outline-[#8B6F47] sm:p-4"
      >
        <div className="relative aspect-[5/3] w-full overflow-hidden rounded-xl bg-[#f9f4ee]">
          <Image
            src={favorite.image}
            alt={`مبل ${favorite.name}`}
            fill
            sizes="(max-width: 519px) 100vw, (max-width: 1023px) 50vw, 25vw"
            className="object-cover transition-transform duration-300 group-hover:scale-[1.03]"
          />
        </div>

        <div className="mt-3 flex min-w-0 flex-1 flex-col">
          <h3 className="line-clamp-1 text-base font-bold text-[#342114] sm:text-lg">
            {favorite.name}
          </h3>

          <span className="mt-2 w-fit max-w-full truncate rounded-lg bg-[#fcedda] px-2.5 py-1 text-xs font-medium text-[#895939]">
            {favorite.category}
          </span>

          <p className="mt-3 break-words text-lg font-bold leading-relaxed text-[#5d3a22] sm:text-xl">
            {formatToman(favorite.price)}
          </p>
        </div>
      </Link>

      <div className="px-3 pb-3 sm:px-4 sm:pb-4">
        <div className="border-t border-[#54341f]/10 pt-3">
          <DeleteDialog
            handleDelete={handleDelete}
            title="حذف از علاقه‌مندی‌ها"
            description={`آیا می‌خواهید مبل ${favorite.name} را از علاقه‌مندی‌های خود حذف کنید؟`}
          >
            <Button
              type="button"
              variant="outline"
              disabled={isLoading}
              className="w-full gap-2 border-red-200 text-red-600 hover:border-red-300 hover:bg-red-50 hover:text-red-700"
            >
              <FiTrash2 className="size-4" />
              {isLoading ? "در حال حذف..." : "حذف از علاقه‌مندی‌ها"}
            </Button>
          </DeleteDialog>
        </div>
      </div>
    </li>
  );
}

export default FavoritesItem;
