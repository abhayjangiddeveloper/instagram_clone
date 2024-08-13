import mongoose, { ConnectionStates } from "mongoose";

const connectionValue: any = {};

export const dbConnection = async () => {
  try {
    const mongodb_uri: string = process.env.MONGODB_URI ?? "";

    if (!mongodb_uri) {
      throw new Error("MongoDB URI not provided");
    }

    if (mongoose.connection.readyState === ConnectionStates.connected) {
      connectionValue.isConnected = mongoose.connection.readyState;
      console.log("mongoDB is already connected", mongoose.connection.host);
      return;
    }

    const db = await mongoose.connect(mongodb_uri);

    connectionValue.isConnected = db.connections[0].readyState;
    console.log("mongoDB is connected", db.connection.host);
  } catch (error: any) {
    console.log("mongoDB connection failed", error.message);
  }
};
