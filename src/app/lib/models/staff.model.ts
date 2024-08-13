import mongoose from "mongoose";

const StaffSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
    name: {
      type: String,
    },
    email: {
      type: String,
    },
    workSummary: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

export const Staff =
  mongoose.models.Staff || mongoose.model("Staff", StaffSchema);
