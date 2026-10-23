"use server";

import { auth } from "@/auth";
import sql from "@/lib/db";
import { updateTag } from "next/cache";

type CommentState = {
  error: string;
};

export async function addComment(
  _prevState: CommentState,
  formData: FormData,
): Promise<CommentState> {
  const session = await auth();

  if (!session?.user?.id) {
    return { error: "برای ثبت نظر ابتدا وارد حساب خودت شو." };
  }

  const productId = formData.get("productId");
  const comment = formData.get("comment");

  if (
    typeof productId !== "string" ||
    typeof comment !== "string" ||
    comment.trim().length < 3 ||
    comment.trim().length > 2000
  ) {
    return { error: "متن نظر باید بین ۳ تا ۲۰۰۰ کاراکتر باشد." };
  }

  try {
    await sql`
      INSERT INTO comments (user_id, product_id, comment)
      VALUES (
        ${session.user.id},
        ${productId},
        ${comment.trim()}
      )
    `;

    updateTag(`comments:${productId}`);

    return { error: "" };
  } catch (error) {
    console.error("ADD COMMENT ERROR:", error);
    return { error: "ثبت نظر انجام نشد. دوباره تلاش کن." };
  }
}

export async function addReply(
  _prevState: CommentState,
  formData: FormData,
): Promise<CommentState> {
  const session = await auth();

  if (!session?.user?.id) {
    return { error: "برای ثبت پاسخ ابتدا وارد حساب خودت شو." };
  }

  const commentId = formData.get("commentId");
  const reply = formData.get("reply");

  if (
    typeof commentId !== "string" ||
    typeof reply !== "string" ||
    reply.trim().length < 3 ||
    reply.trim().length > 2000
  ) {
    return { error: "متن پاسخ باید بین ۳ تا ۲۰۰۰ کاراکتر باشد." };
  }

  try {
    const parent = await sql`
      SELECT id
      FROM comments
      WHERE id = ${commentId}
      LIMIT 1
    `;

    if (parent.length === 0) {
      return { error: "نظر موردنظر پیدا نشد." };
    }

    await sql`
      INSERT INTO replies (user_id, comment_id, reply)
      VALUES (
        ${session.user.id},
        ${commentId},
        ${reply.trim()}
      )
    `;

    updateTag(`replies:${commentId}`);

    return { error: "" };
  } catch (error) {
    console.error("ADD REPLY ERROR:", error);
    return { error: "ثبت پاسخ انجام نشد. دوباره تلاش کن." };
  }
}

export async function deleteComment(productId: string, commentId: string) {
  const session = await auth();

  try {
    await sql`
      DELETE FROM comments
      WHERE user_id = ${session?.user?.id as string} AND product_id = ${productId} AND id = ${commentId}
    `;
    updateTag(`comments:${productId}`);
    updateTag(`replies:${commentId}`);
  } catch (error) {
    console.error("خطا در حذف نظر:", error);
    throw new Error("حذف نظر ناموفق بود.");
  }
}
