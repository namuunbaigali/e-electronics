import mongoose from "mongoose";

export const UserRole = {
  _id: {
    type: String,
    default: nanoid(),
  },
  name: {
    type: String,
    required: true,
  },
};

export const userRoleSchema = new mongoose.Schema(UserRole, {
  timestamps: true,
});
