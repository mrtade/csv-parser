import * as dotenv from 'dotenv';
import mongoose from 'mongoose';

dotenv.config();

const uri = process.env.MONGODB_URI as string;

export const connectDB = async () => {
  try {
    const db = await mongoose.connect(uri);
    console.log(`> Successfully Connected to ${db.connection.name} DB`);
    return db;
  } catch (error) {
    console.log(error);
    throw new Error("> Error connecting to database!");
  }
};
