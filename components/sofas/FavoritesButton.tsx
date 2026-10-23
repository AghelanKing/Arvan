"use client";

import { useOptimistic, useTransition } from "react";
import { TiHeart, TiHeartOutline } from "react-icons/ti";
import { Button } from "../ui/button";
import { addFavorites } from "@/app/favorites/action";
import Link from "next/link";

function FavoritesButton({
  productId,
  userId,
  is_favorites,
  isOnPage,
}: {
  productId: string;
  userId?: string;
  is_favorites: boolean;
  isOnPage?: boolean;
}) {
  const [optimisticFavorite, setOptimisticFavorite] =
    useOptimistic(is_favorites);

  const [isPending, startTransition] = useTransition();

  function handleFavorite() {
    if (!userId) return;

    startTransition(async () => {
      setOptimisticFavorite(!optimisticFavorite);

      await addFavorites(productId, is_favorites, userId);
    });
  }

  if (!userId) {
    return isOnPage ? (
      <Link href="/login/signup">
        <Button
          variant="outline"
          className="h-12 px-5 cursor-pointer border-[#342114]/30"
        >
          <TiHeartOutline className="text-xl" />
          وارد شوید
        </Button>
      </Link>
    ) : (
      <Link href="/login/signup">
        <Button variant="destructive" className="cursor-pointer mt-3 z-50">
          <TiHeartOutline />
        </Button>
      </Link>
    );
  }

  return isOnPage ? (
    <Button
      onClick={(e) => {
        e.preventDefault();
        e.stopPropagation();

        handleFavorite();
      }}
      variant={is_favorites ? "destructive" : "outline"}
      className="h-12 px-5 cursor-pointer border-[#342114]/30"
      disabled={isPending}
    >
      {is_favorites ? (
        <TiHeart className="text-xl" />
      ) : (
        <TiHeartOutline className="text-xl" />
      )}
      علاقه دارم
    </Button>
  ) : (
    <Button
      onClick={(e) => {
        e.preventDefault();
        e.stopPropagation();

        handleFavorite();
      }}
      disabled={isPending}
      variant="destructive"
      className="cursor-pointer mt-3 z-50 px-2!"
    >
      {optimisticFavorite ? <TiHeart /> : <TiHeartOutline />}
    </Button>
  );
}

export default FavoritesButton;
