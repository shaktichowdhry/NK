import { Schema, model } from 'mongoose';

const productSchema = new Schema({
    title: { type: String, required: true},
    mrp:{ type: Number, required: true},
    discount_mrp: { type: Number},
    image: { type: String, required: true},
    more_images: [{ type: String}],
    description: { type: String, required: true},
    status: { type: String, required: true},
    categories: [{ type: String, required: true}],
});

export default model('Product', productSchema);