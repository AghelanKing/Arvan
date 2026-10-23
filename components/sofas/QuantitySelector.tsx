"use client";

import { UpdateQuantity } from "@/app/sofas/action";
import { useDebounce } from "@/hooks/useDebounce";
import { Minus, Plus } from "lucide-react";
import { useEffect, useState } from "react";

export default function QuantitySelector({
  productId,
  userId,
  defultQuantity = 1,
}: {
  productId: string;
  userId?: string;
  defultQuantity: number;
}) {
  const [quantity, setQuantity] = useState<number>(defultQuantity);
  const [isLoading, setIsLoading] = useState(false);
  const debouncedQuantity = useDebounce(quantity, 700);

  useEffect(() => {
    async function saveQuantity() {
      setIsLoading(true);
      try {
        await UpdateQuantity(productId, debouncedQuantity, userId);
      } catch (error) {
        console.error("خطا در ذخیره تعداد:", error);
      } finally {
        setIsLoading(false);
      }
    }

    saveQuantity();
  }, [debouncedQuantity, productId, userId]);

  return (
    <div dir="ltr" className="flex items-center gap-3 rounded-xl border p-1">
      <button
        type="button"
        onClick={() => setQuantity((quantity) => quantity - 1)}
        disabled={quantity <= 1 || isLoading}
        className="rounded-lg bg-[#54341f] p-2 text-white disabled:opacity-40 cursor-pointer"
        aria-label="کم کردن تعداد"
      >
        <Minus size={18} />
      </button>

      <span className="w-8 text-center tabular-nums">{quantity}</span>

      <button
        type="button"
        onClick={() => setQuantity((quantity) => quantity + 1)}
        disabled={isLoading}
        className="rounded-lg bg-[#54341f] p-2 text-white cursor-pointer"
        aria-label="زیاد کردن تعداد"
      >
        <Plus size={18} />
      </button>
    </div>
  );
}
