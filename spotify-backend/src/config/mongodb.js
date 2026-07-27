import mongoose from "mongoose";
import dns from "dns";
dns.setServers(["1.1.1.1", "8.8.8.8"]);

const connectDB = async () => {
  mongoose.connection.on("connected", () => {
    console.log("Database Connection established");
  });
  await mongoose.connect(`${process.env.MONGODB_URI}/spotify`);
};

export default connectDB;
