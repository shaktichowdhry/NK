import { Schema, model } from "mongoose";
import User from "./user.js";

const addressSchema = new Schema({
    user: { 
        type: Schema.Types.ObjectID, required: true, ref: User
    },
    receiverDetails: {        
        fullName: {type: String, required: true},
        mobile: {type: Number, required: true}
    },
    street: { type: String, required: true },
    city: { type: String, required: true },
    state: { type: String, required: true },
    zip: { type: String, required: true },
    isDefault: {type:Boolean, default: false}
});

export default model("Address", addressSchema);
