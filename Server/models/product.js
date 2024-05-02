import { Schema, model } from "mongoose";
import uniqueValidator from "mongoose-unique-validator";
import Review from "./review.js";
import imageSchema from "./image.js";

const productSchema = new Schema(
  {
    title: { type: String, required: true, unique: true },
    price: { type: Number, required: true },
    discount_price: { type: Number },
    count_in_stock: { type: Number, required: true },
    images: [imageSchema],
    reviews: [{ type: Schema.Types.ObjectID, ref: Review }],
    categories: [{ type: String, required: true }],
    description: { type: String, required: true },
    status: { type: Boolean, default: true },
    rating: { type: Number },
    reviews_number: { type: Number },
    sales: { type: Number, default: 0 },
    attrs: [
      { key: { type: String }, value: { type: String } },
      // [{ key: "color", value: "red" }]
    ],
  },
  {
    timestamps: true,
  }
);

productSchema.plugin(uniqueValidator);
productSchema.index(
  { title: "text", description: "text" },
  { title: "TextIndex" }
);
productSchema.index({"attr.key":1, "attr.value":1});

// Singular collection name
export default model("Product", productSchema);
