import { Schema } from "mongoose";

const imageSchema = new Schema(
  {
    path: { type: String, required: true}
  }
);

export default imageSchema;
