import { fetchProducts } from "../services/product.service.js";

export const getProducts = async (req, res) => {
  try {
    const result = await fetchProducts(req.query);

    return res.status(200).json({
      success: true,
      count: result.products.length,
      nextCursor: result.nextCursor,
      products: result.products,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message || "Internal Server Error",
    });
  }
};
