import "dotenv/config";
import mongoose from "mongoose";

const connectDB = async () => {
  try {
    await mongoose
      .connect(process.env.MONGODB_URI)
      .then(() => console.log("Connection to DB successfull."));
  } catch (err) {
    console.log("Connection to DB failed!!!");
    process.exit(1); 
  }
};

export default connectDB;