import { cacheLife, cacheTag } from "next/cache";
import sql from "./db";
import {
  SofaCard,
  Products,
  Favorites,
  Cart,
  Comments,
  Replies,
} from "./difintions";

export async function fatchIsFeaturedSofas() {
  "use cache";

  cacheLife("days");
  cacheTag("isFeatured");

  try {
    const data = await sql<SofaCard[]>`
    SELECT 
    id,
    name,
    price,
    image,
    category,
    is_featured
    FROM products 
    WHERE is_featured = true
    ORDER BY created_at DESC
    LIMIT 10
    `;
    return data;
  } catch (error) {
    console.log(error);
    throw new Error(
      "A problem arose while retrieving information about the is-featured furniture.",
    );
  }
}

export async function fetchPriceRange() {
  const data = await sql`
    SELECT
      MIN(price) AS min_price,
      MAX(price) AS max_price
    FROM products
  `;

  return {
    min: Number(data[0].min_price),
    max: Number(data[0].max_price),
  };
}

export async function fatchSofas(
  page: number = 1,
  category: string = "all",
  color: string = "all",
  material: string = "all",
  minPrice: number = 0,
  maxPrice: number = 123000000,
) {
  "use cache";

  cacheLife("hours");
  cacheTag("sofas");

  const productsPerPage = 9;
  const offset = (page - 1) * productsPerPage;

  try {
    const data = await sql<SofaCard[]>`
      SELECT 
        id,
        name,
        price,
        image,
        category,
        is_featured
      FROM products
      WHERE (${category} = 'all' OR category = ${category})
        AND (${color} = 'all' OR color = ${color})
        AND (${material} = 'all' OR material = ${material})
        AND price >= ${minPrice}
        AND price <= ${maxPrice}
      ORDER BY created_at DESC
      LIMIT ${productsPerPage}
      OFFSET ${offset}
    `;

    return data;
  } catch (error) {
    console.log(error);

    throw new Error("Failed to fetch sofas");
  }
}

export async function fetchSofasCount(
  category: string = "all",
  color: string = "all",
  material: string = "all",
  minPrice: number = 0,
  maxPrice: number = 123000000,
) {
  try {
    const data = await sql`
      SELECT COUNT(*)
      FROM products
      WHERE (${category} = 'all' OR category = ${category})
        AND (${color} = 'all' OR color = ${color})
        AND (${material} = 'all' OR material = ${material})
        AND price >= ${minPrice}
        AND price <= ${maxPrice}
    `;

    return Number(data[0].count);
  } catch (error) {
    console.log(error);
    throw new Error("Failed to fetch sofas count.");
  }
}

export async function fetchSofasColor() {
  const data = await sql<{ color: string }[]>`
    SELECT DISTINCT color
    FROM products
    ORDER BY color;
  `;

  return data;
}

export async function fetchSofasMaterial() {
  const data = await sql<{ material: string }[]>`
    SELECT DISTINCT material
    FROM products
    ORDER BY material;
  `;

  return data;
}

export async function fetchSofa(sofaId: string) {
  "use cache";

  cacheLife("days");
  cacheTag("sofa");

  try {
    const data = await sql<Products[]>`
      SELECT *
      FROM products
      WHERE id = ${sofaId}
    `;

    return data;
  } catch (error) {
    console.log(error);

    throw new Error(
      "A problem arose while retrieving information about the SOFA furniture.",
    );
  }
}

export async function IsFavorites(userId?: string) {
  "use cache";

  cacheLife("days");
  cacheTag(`isFavorites:${userId}`);

  try {
    const data = await sql<{ product_id: string }[]>`
      SELECT product_id
      FROM favorites
      WHERE user_id = ${userId as string}
    `;

    return data;
  } catch (error) {
    console.log(error);

    throw new Error(
      "A problem arose while retrieving information about the SOFA furniture.",
    );
  }
}

export async function fetchFavorites(userId?: string) {
  "use cache";

  cacheLife("days");
  cacheTag(`favorites:${userId}`);

  if (!userId) return [];
  try {
    const data = await sql<Favorites[]>`
    SELECT
      products.id,
      products.name,
      products.price,
      products.category,
      products.image
    FROM products
    JOIN favorites
      ON products.id = favorites.product_id
    WHERE favorites.user_id = ${userId}
  `;

    return data;
  } catch (error) {
    console.log(error);

    throw new Error(
      "A problem arose while retrieving information about the favorites furniture.",
    );
  }
}

export async function isAddingToCart(userId?: string) {
  "use cache";

  cacheLife("days");
  cacheTag(`isAddingToCart:${userId}`);

  try {
    const data = await sql<{ product_id: string; quantity: string }[]>`
      SELECT product_id, quantity
      FROM cart_items
      WHERE user_id = ${userId as string}
    `;

    return data;
  } catch (error) {
    console.log(error);

    throw new Error(
      "A problem arose while retrieving information about the SOFA furniture.",
    );
  }
}

export async function cartCount(userId?: string) {
  "use cache";

  if (!userId) return 0;

  cacheLife("days");
  cacheTag(`CartCount:${userId}`);

  const data = await sql`
    SELECT COUNT(*) AS count
    FROM cart_items
    WHERE user_id = ${userId}
  `;

  return Number(data[0].count);
}

export async function fetchCart(userId?: string) {
  "use cache";

  cacheLife("days");
  cacheTag(`cart:${userId}`);

  if (!userId) return [];
  try {
    const data = await sql<Cart[]>`
    SELECT
      products.id,
      products.name,
      products.price,
      products.category,
      products.image,
      cart_items.quantity
    FROM products
    JOIN cart_items
      ON products.id = cart_items.product_id
    WHERE cart_items.user_id = ${userId}
    ORDER BY cart_items.created_at DESC
  `;

    return data;
  } catch (error) {
    console.log(error);

    throw new Error(
      "A problem arose while retrieving information about the cart furniture.",
    );
  }
}

export async function sumPriceCart(userId?: string) {
  "use cache";

  cacheLife("days");
  cacheTag(`sumPriceCart:${userId}`);

  const data = await sql`
  SELECT COALESCE(SUM(products.price * cart_items.quantity), 0) AS total
  FROM products
  JOIN cart_items
    ON products.id = cart_items.product_id
  WHERE cart_items.user_id = ${userId as string}
`;

  return data[0].total;
}

export async function fetchUserName(userId?: string) {
  "use cache";

  cacheLife("days");
  cacheTag(`name:${userId}`);

  if (!userId) return null;

  const data = await sql<{ name: string }[]>`
  SELECT name
  FROM users
  WHERE id = ${userId as string}
`;

  return data;
}

export async function fetchComments(productId: string) {
  "use cache";

  cacheLife("hours");
  cacheTag(`comments:${productId}`);

  try {
    const data = await sql<Comments[]>`
      SELECT *
      FROM comments
      WHERE product_id = ${productId}
      ORDER BY created_at DESC
    `;

    return data;
  } catch (error) {
    console.error("FETCH COMMENTS ERROR:", error);
    throw new Error("دریافت نظرات ناموفق بود.");
  }
}

export async function fetchReplies(commentId: string) {
  "use cache";

  cacheLife("hours");
  cacheTag(`replies:${commentId}`);

  try {
    const data = await sql<Replies[]>`
      SELECT *
      FROM replies
      WHERE comment_id = ${commentId}
      ORDER BY created_at ASC
    `;

    return data;
  } catch (error) {
    console.error("FETCH REPLIES ERROR:", error);
    throw new Error("دریافت پاسخ‌های این نظر ناموفق بود.");
  }
}
