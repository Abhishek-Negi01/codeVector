import { getProducts } from "../repositories/product.repository.js";
import { encodeCursor } from "../utils/cursor.js";

export const fetchProducts = async (query) => {
  const limit = Number(query.limit || 20);

  const products = await getProducts(query);

  let nextCursor = null;

  if (products.length > limit) {
    const last = products[limit - 1];

    nextCursor = encodeCursor(last);

    products.pop();
  }

  return {
    products,
    nextCursor,
  };
};
