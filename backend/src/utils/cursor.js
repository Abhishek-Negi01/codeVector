export const encodeCursor = (product) => {
  return Buffer.from(
    JSON.stringify({
      updatedAt: product.updatedAt,
      id: product._id,
    }),
  ).toString("base64");
};

export const decodeCursor = (cursor) => {
  if (!cursor) {
    return null;
  }

  return JSON.parse(Buffer.from(cursor, "base64").toString("utf-8"));
};
