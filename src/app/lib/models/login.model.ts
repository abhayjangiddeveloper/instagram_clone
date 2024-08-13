import mongoose from "mongoose";

const LoginSchema = new mongoose.Schema(
  {
    id: {
      type: String,
    },
    password: {
      type: String,
      trim: true,
    },
  },
  {
    timestamps: true,
  }
);

export const Login =
  mongoose.models.User || mongoose.model("Login", LoginSchema);
