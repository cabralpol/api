import { connect } from "mongoose";
import dotenv from 'dotenv';

dotenv.config();

export const mongoConnect = async () => {
    try {
        console.log("Connecting to mongoDB...");
        await connect(process.env.MONGO_URL as string);
        console.log("MongoDB connected successfully");
    } catch (error) {
        console.log("Connection error with MongoDB: ", error);
    }
}