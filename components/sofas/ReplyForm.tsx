"use client";

import { CornerDownLeft, Send } from "lucide-react";
import { useActionState } from "react";
import { addReply } from "./action";

export default function ReplyForm({ commentId }: { commentId: string }) {
  const [state, formAction, pending] = useActionState(addReply, { error: "" });

  return (
    <form action={formAction} className="space-y-3">
      <input type="hidden" name="commentId" value={commentId} />

      <textarea
        name="reply"
        required
        minLength={3}
        maxLength={2000}
        placeholder="پاسخت رو بنویس..."
        className="min-h-24 w-full resize-y rounded-xl border border-[#342114]/15 p-3 text-sm outline-none transition placeholder:text-[#342114]/40 focus:border-[#cca26e] focus:ring-2 focus:ring-[#cca26e]/20"
      />

      {state?.error && <p className="text-sm text-red-600">{state.error}</p>}

      <button
        type="submit"
        // disabled={pending}
        className="inline-flex items-center gap-2 rounded-xl bg-[#fcedda] px-4 py-2.5 text-sm font-medium text-[#54341f] transition hover:bg-[#cca26e]/30 disabled:cursor-not-allowed disabled:opacity-50"
      >
        <CornerDownLeft className="size-4" />
        <Send className="size-4" />
        {pending ? "در حال ارسال..." : "ثبت پاسخ"}
      </button>
    </form>
  );
}
