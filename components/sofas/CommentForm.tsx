"use client";

import { Send } from "lucide-react";
import { useActionState } from "react";
import { addComment } from "./action";

export default function CommentForm({ productId }: { productId: string }) {
  const [state, formAction, pending] = useActionState(addComment, {
    error: "",
  });

  return (
    <form action={formAction} className="space-y-3">
      <input type="hidden" name="productId" value={productId} />

      <textarea
        name="comment"
        required
        minLength={3}
        maxLength={2000}
        placeholder="نظرت رو درباره این محصول بنویس..."
        className="min-h-28 w-full resize-y rounded-xl border border-[#342114]/15 p-4 text-sm outline-none transition placeholder:text-[#342114]/40 focus:border-[#cca26e] focus:ring-2 focus:ring-[#cca26e]/20"
      />

      {state?.error && <p className="text-sm text-red-600">{state.error}</p>}

      <button
        type="submit"
        disabled={pending}
        className="inline-flex items-center gap-2 rounded-xl bg-[#54341f] px-5 py-3 text-sm font-medium text-white transition hover:bg-[#342114] disabled:cursor-not-allowed disabled:opacity-50"
      >
        <Send className="size-4" />
        {pending ? "در حال ارسال..." : "ثبت نظر"}
      </button>
    </form>
  );
}
