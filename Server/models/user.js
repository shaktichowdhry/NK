import { Schema, model } from "mongoose";
import uniqueValidator from "mongoose-unique-validator";
import Address from "./address.js";

const userSchema = new Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  image: { type: String, default: "../utils/images" },
  mobileNumber: { type: Number, required: true},
  password: { type: String, required: true },
  isAdmin: { type: Boolean, required: true, default: false },
  address:[{type: Schema.Types.ObjectID, ref: Address}],
// orders: [{type: Schema.Types.ObjectID, ref: Order}],
// rewards:[{type: Schema.Types.ObjectID, ref: Reward}],
// wishlist:[{type: Schema.Types.ObjectID, ref: Product}],
},{
    timestamps:true;
});

userSchema.plugin(uniqueValidator);

export default model("User", userSchema);
