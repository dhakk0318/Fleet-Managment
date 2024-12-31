import mongoose from 'mongoose';

const connectDB = async () => {
  // console.log('Mongo URI:', process.env.MONGO_URI);

  if (mongoose.connections[0].readyState) {
    console.log("MongoDB is already connected 🍃🚀.");
    return;
  }

  try {
    await mongoose.connect(process.env.MONGO_URI as string);
    console.log("Connected to MongoDB");
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
  }
};

export default connectDB;
