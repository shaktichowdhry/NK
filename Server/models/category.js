import { Schema, model } from "mongoose";
import uniqueValidator from "mongoose-unique-validator";

const categorySchema = new Schema({
  name: { type: String, required: true, unique: true },
  description: { type: String, default: "default category description" },
  image: { type: String, default: "../utils/images" },
  attr: [{ key: { type: String }, value: [{ type: String }] }],
  status: { type: Boolean, default: true },
});

categorySchema.plugin(uniqueValidator);
categorySchema.index({"description": 1});

export default model("Category", categorySchema);
