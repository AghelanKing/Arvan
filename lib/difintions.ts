export type Products = {
  id: string;
  name: string;
  description: string;
  price: number;
  category: string;
  image: string;
  color: string;
  material: string;
  is_featured: boolean;
  created_at: string;
};

export type SofaCard = {
  id: string;
  name: string;
  price: number;
  image: string;
  category: string;
  is_featured: boolean;
  is_favorites: boolean;
};

export type Favorites = {
  id: string;
  name: string;
  price: number;
  category: string;
  image: string;
};

export type Cart = {
  id: string;
  name: string;
  price: number;
  category: string;
  image: string;
  quantity: number;
};

export type Comments = {
  id: string;
  comment: string;
  user_id: string;
  product_id: string;
  created_at: string;
  update_at: string;
};

export type Replies = {
  id: string;
  reply: string;
  user_id: string;
  comment_id: string;
  created_at: string;
  update_at: string;
};
