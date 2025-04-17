import mongoose from "mongoose";

const connectDB = async () => {
  try {
    const mongoUri = "mongodb+srv://demomedpro121:demomedpro121@homestaycluster.ntflq.mongodb.net/";
    await mongoose.connect(mongoUri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("MongoDB connection SUCCESS");
  } catch (error) {
    console.error("MongoDB connection FAIL:", error.message);
    process.exit(1);
  }
};

export default connectDB;