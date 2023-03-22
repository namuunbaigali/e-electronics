import mongoose from "mongoose";

export const User = {
  _id: {
    type: String,
    default: nanoid(),
  },
  name: {
    type: String,
    required: true,
  },

  email: {
    type: String,
    unique: true,
  },
  role: {
    type: String,
    ref: "UserRole",
  },
};

export const userSchema = new mongoose.Schema(User, { timestamps: true });
