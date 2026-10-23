"use server";

import sql from "@/lib/db";
import { updateTag } from "next/cache";

export async function addToCart(productId: string, userId?: string) {
  if (!userId) return [];
  try {
    await sql`INSERT INTO cart_items (user_id,product_id,quantity) VALUES (${userId},${productId},${1})`;
    updateTag(`isAddingToCart:${userId}`);
    updateTag(`CartCount:${userId}`);
    updateTag(`cart:${userId}`);
    updateTag(`sumPriceCart:${userId}`);
  } catch (error) {
    console.log("error", error);
  }
}

export async function UpdateQuantity(
  productId: string,
  value: number = 1,
  userId?: string,
) {
  if (!userId) return [];
  try {
    await sql`UPDATE cart_items 
    SET quantity = ${value}
    WHERE user_id = ${userId} AND product_id = ${productId}
    `;
    updateTag(`isAddingToCart:${userId}`);
    updateTag(`CartCount:${userId}`);
    updateTag(`cart:${userId}`);
    updateTag(`sumPriceCart:${userId}`);
  } catch (error) {
    console.log("error", error);
  }
}

export async function deleteCartItem(productId: string, userId?: string) {
  if (!userId) return [];
  try {
    await sql`DELETE FROM cart_items
    WHERE user_id = ${userId} AND product_id = ${productId}
    `;
    updateTag(`isAddingToCart:${userId}`);
    updateTag(`CartCount:${userId}`);
    updateTag(`cart:${userId}`);
    updateTag(`sumPriceCart:${userId}`);
  } catch (error) {
    console.log("error", error);
  }
}
