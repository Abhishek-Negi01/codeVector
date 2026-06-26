import mongoose from "mongoose";
import { faker, Faker } from "@faker-js/faker";
import connectDB from "../config/database.js";
import Product from "../models/Product.js";

const TOTAL_PRODUCTS = 200000;
const BATCH_SIZE = 5000; // 200000 / 5000 = 40 batches

const categories = [
  "Electronics",
  "Books",
  "Clothing",
  "Sports",
  "Home",
  "Beauty",
  "Gardening",
  "Automobile",
  "Toys",
  "Furniture",
];

const generateProduct = async () => {
  // random timestamp

  const updatedAt = faker.date.between({
    from: new Date(Date.now() - 365 * 24 * 60 * 60 * 1000),
    to: new Date(),
  });

  return {
    name: faker.commerce.productName(),

    category: categories[Math.floor(Math.random() * categories.length)],

    price: Number(
      faker.commerce.price({
        min: 100,
        max: 100000,
        dec: 2,
      }),
    ),

    createdAt: updatedAt,
    updatedAt: updatedAt,
  };
};

const seedProduct = async () => {
  try {
    await connectDB();

    console.log("Deleting old products...");

    await Product.deleteMany();

    console.log("Generating new Products");

    let inserted = 0;

    while (inserted < TOTAL_PRODUCTS) {
      const batch = [];

      for (let i = 0; i < BATCH_SIZE && inserted < TOTAL_PRODUCTS; i++) {
        batch.push(await generateProduct());
        inserted++;
      }

      await Product.insertMany(batch);

      console.log(
        `${inserted} products inserted  out of ${TOTAL_PRODUCTS} products.`,
      );
    }

    console.log("Database Seed completed");

    process.exit(1);
  } catch (error) {
    console.error(error?.message);

    process.exit(1);
  }
};

seedProduct();
