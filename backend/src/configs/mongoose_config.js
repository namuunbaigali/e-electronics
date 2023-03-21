import mongoose from "mongoose";

const MONGO_CONNECTION_STRING =
  "mongodb+srv://namuunbaigali266:ezzAXDE4udeBjHno@nmk11.xrigic2.mongodb.net/Green";

await mongoose
  .connect(MONGO_CONNECTION_STRING)
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => {
    console.log("Could not connect to MongoDB", err);
  });

export default mongoose.connection;
