import mongoose from "mongoose";

const Step1Schema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
    firstName: {
      type: String,
    },
    lastName: {
      type: String,
    },
    phoneNumber: {
      type: Number,
    },
    emailAddress: {
      type: String,
    },
    cityName: {
      type: String,
    },
    stateName: {
      type: String,
    },
    countryName: {
      type: String,
    },
  },
  { timestamps: true }
);

export const Step1 =
  mongoose.models.Step1 || mongoose.model("Step1", Step1Schema);
