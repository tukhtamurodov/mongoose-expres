import { Schema, Types, model } from "mongoose";

const ConuntriesScheam = new Schema(
  {
    id: {
      type: Types.ObjectId,
    },
    name: {
      type: String,
      required: true,
    },
    poytaxt: {
      type: String,
      required: true,
    },
  },
  {
    collection: "countries",
  }
);

export default model("countries", ConuntriesScheam);
