import mongoose from "mongoose";
import { MONGODB_URI } from "../utils/dotenv.js";

const connectDB = async () => {
  try {
    await mongoose.connect(MONGODB_URI);

    console.log("MONGODB connected");
  } catch (error) {
    console.error("MONGODB connection failed!");
    console.error(error?.message);
    process.exit(1);
  }
};

export default connectDB;
