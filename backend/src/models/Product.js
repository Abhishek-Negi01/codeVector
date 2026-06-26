import mongoose from "mongoose";

const productSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },

    category: {
      type: String,
      required: true,
      index: true,
    },

    price: {
      type: Number,
      required: true,
      min: 0,
    },
  },
  {
    timestamps: true,
  },
);

// Indexes -> imp

// sort by updatedAt and id in desc

productSchema.index({
  updatedAt: -1,
  _id: -1,
});

// store based on category

productSchema.index({
  category: 1,
  updatedAt: -1,
  _id: -1,
});

const Product = mongoose.model("Product", productSchema);

export default Product;
