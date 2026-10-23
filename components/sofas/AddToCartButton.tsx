"use client";

import { RiShoppingCartLine } from "react-icons/ri";
import { Button } from "../ui/button";
import Link from "next/link";
import { addToCart } from "@/app/sofas/action";
import { useState } from "react";
import toast from "react-hot-toast";

function AddToCartButton({
  userId,
  productId,
}: {
  userId?: string;
  productId: string;
}) {
  const [isLoading, setIsLoading] = useState(false);

  const handleAdd = async () => {
    setIsLoading(true);

    try {
      await addToCart(productId, userId);
      toast.success("این محصول با موفقیت به سبد خرید اضافه شد");
    } catch (error) {
      console.log(error);
      toast.error("اضافه کردن با خطا مواجه شد، دوباره تلاش کنید.");
    } finally {
      setIsLoading(false);
    }
  };

  return !userId ? (
    <Link href="/login" className="flex-1 w-full">
      <Button className="w-full h-12 cursor-pointer">
        <RiShoppingCartLine className="text-lg" />
        افزودن به سبد خرید
      </Button>
    </Link>
  ) : (
    <Button
      disabled={isLoading}
      onClick={handleAdd}
      className="flex-1 w-full h-12 cursor-pointer"
    >
      <RiShoppingCartLine className="text-lg" />
      {isLoading ? "در حال اضافه شدن..." : "افزودن به سبد خرید"}
    </Button>
  );
}

export default AddToCartButton;
