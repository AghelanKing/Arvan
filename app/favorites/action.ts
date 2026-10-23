"use server";

import sql from "@/lib/db";
import { updateTag } from "next/cache";

export async function addFavorites(
  productId: string,
  is_favorites: boolean,
  userId?: string,
) {
  try {
    if (!userId) {
      throw new Error("Unauthorized");
    }

    if (!is_favorites) {
      await sql`
        INSERT INTO favorites (user_id, product_id)
        VALUES (${userId}, ${productId})
      `;
    } else {
      await sql`
        DELETE FROM favorites
        WHERE user_id = ${userId}
          AND product_id = ${productId}
      `;
    }

    updateTag(`isFavorites:${userId}`);
    updateTag(`favorites:${userId}`);
  } catch (error) {
    console.error("FAVORITES ERROR:", error);

    throw new Error("Error while updating favorites");
  }
}

export async function DeleteFavorites(productId: string, userId?: string) {
  if (!userId) {
    throw new Error("Unauthorized");
  }

  try {
    await sql`
        DELETE FROM favorites
        WHERE user_id = ${userId}
          AND product_id = ${productId}
      `;

    updateTag(`isFavorites:${userId}`);
    updateTag(`favorites:${userId}`);
  } catch (error) {
    console.error("FAVORITES ERROR:", error);

    throw new Error("Error while deleting favorites");
  }
}
