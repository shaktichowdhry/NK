import { Schema, model } from 'mongoose';
// import uniqueValidator from 'mongoose-unique-validator';

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

// email: {type: String, unique: true},
// categories: [{ type: mongoose.Types.ObjectID, ref: 'Category',required: true}],
// productSchema.plugin(uniqueValidator);


// Singular collection name
export default model('Product', productSchema);