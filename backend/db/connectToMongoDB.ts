import mongoose from "mongoose";

const connectToMongoDB = async () => {
  try {
    await mongoose.connect(
      process.env.MONGO_DB_URL ? process.env.MONGO_DB_URL : ""
    );
    console.log("db connected successfully");
  } catch (error: any) {
    console.log("Error connecting mongodb", error.message);
  }
};

export default connectToMongoDB;
