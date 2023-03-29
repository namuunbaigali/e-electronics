import mongoose from "mongoose";

const orderSchema = mongoose.Schema.create({
  location: {
    type: { type: String, default: "Point" },
  },
});
