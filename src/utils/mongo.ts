import mongoose, { Mongoose } from "mongoose";
import _ from "../model/index";
export default async (): Promise<Mongoose> =>
  await mongoose.connect("mongodb://127.0.0.1:27017/cauntries-list");
