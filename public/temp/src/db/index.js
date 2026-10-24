import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";

const connectDB = async () => {
  try {
    const connectionInstance = await mongoose.connect(
      `${process.env.MONGO_DB}/${DB_NAME}`
    );

    console.log(
      "MONGODB CONNECTED! DB host:",
      connectionInstance.connection.host
    );
  } catch (error) {
    console.log("MONGODB connection error:", error.message);
    process.exit(1);
  }
};

export default connectDB;