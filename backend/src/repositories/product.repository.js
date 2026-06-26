import Product from "../models/Product.js";
import { decodeCursor } from "../utils/cursor.js";

export const getProducts = async ({ category, cursor, limit = 20 }) => {
  const filter = {};

  if (category) {
    filter.category = category;
  }

  if (cursor) {
    const decoded = decodeCursor(cursor);

    filter.$or = [
      {
        updatedAt: {
          $lt: new Date(decoded.updatedAt),
        },
      },

      {
        updatedAt: new Date(decoded.updatedAt),

        _id: {
          $lt: decoded.id,
        },
      },
    ];
  }

  const product = await Product.find(filter)
    .sort({
      updatedAt: -1,
      _id: -1,
    })
    .limit(Number(limit) + 1)
    .lean();

  return product;
};
