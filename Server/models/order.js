import { Schema, model } from "mongoose";
import uniqueValidator from "mongoose-unique-validator";
import User from "./user.js";

const orderSchema = new Schema({
  user: {type: Schema.Types.ObjectID, required: true, ref: User},
  orderTotal: {
    itemsCount: {type: Number, required: true},
    cartSubtotal: {type: Number, required: true}
  },
  cartItems:[{
    name:{type: String, required: true},
    price: {type: Number, required: true},
    image: {type: String, required: true},
    quantity: {type: Number, required: true},
    count: {type: Number, required: true} 
  }],
  transactionResult: {
    status: {type: String },
    createTime: {type: String},
    amount: {type: Number}
  }, 
  paymentMethod: {type: String, required: true},
  isPaid: {type: Boolean, required: true, default : false},
  paidAt: {type: Date},
  isDelivered: {type: Boolean, required: true, default: false},
  deliveredAt: {type: Date},
},{
    timestamps:true;
});

orderSchema.plugin(uniqueValidator);

export default model("Order", orderSchema);
