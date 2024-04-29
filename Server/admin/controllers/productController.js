import HttpError from "../models/httpErrorModel.js";
import { validationResult } from "express-validator";
import Product from "../models/product.js";

// dummy data till we get mongoDB
// let DUMMY_PRODUCTS = [
//   {
//     id: "p1",
//     title: "",
//     mrp: "",
//     discount_mrp: "",
//     image: "",
//     more_images: [],
//     description: "",
//     status: "",
//     categories: [],
//     created_at: "",
//     updated_at: "",
//   },
// ];

// controller functtions
const getAllProducts = async (req, res, next) => {
  let products;
  try {
    products = await Product.find();
  } catch (err) {
    return next(new HttpError("Fetching Products failed! Try again.", 500));
  }
  res.json({ products: products });
};

const addProduct = async (req, res, next) => {
  // EXPRESS-VALIDATION ERROR
  const err = validationResult(req);
  if (!err.isEmpty()) {
    // 422 - unprocessable request
    return next(new HttpError("Invalid input user", 422));
  }
  // because we added body parser - no need to destructure it
  const {
    title,
    mrp,
    discount_mrp,
    image,
    more_images,
    description,
    status,
    categories,
  } = req.body;
  const createdProduct = new Product({
    title,
    mrp,
    discount_mrp,
    image,
    more_images,
    description,
    status,
    categories,
  });
  try {
    await createdProduct.save();
  } catch (err) {
    return next(
      new HttpError("Creating Product failed, please try again.", 500)
    );
  }
  //   201 for success creation
  res.status(201).json({ product: createdProduct });
};

const getProduct = async (req, res, next) => {
  const productId = req.params.pid;
  let product;
  try {
    // findById doesnt return promise so we use exec()
    product = await Product.findById(productId).exec();
  } catch (err) {
    return next(
      new HttpError("Somethings went wrong! Could not find a product.", 500)
    );
  }

  if (!product) {
    return next(
      new HttpError("Could not find a product for this provided id.", 404)
    );
  }
  res.json({ product: product.toObject({ getters: true }) });
};

const editProduct = async (req, res, next) => {
  // error handling
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return next(new HttpError("Invalid input", 422));
  }
  const { title, mrp, discount_mrp, image, status, description, categories } =
    req.body;
  const productId = req.params.pid;
  let product;
  try {
    product = await Product.findById(productId);
  } catch (err) {
    return next(new HttpError("Feching product failed! Try again.", 500));
  }
  if (!product) {
    return next(new HttpError("No product found for this id.", 404));
  }
  product.title = title;
  product.mrp = mrp;
  product.discount_mrp = discount_mrp;
  product.image = image;
  product.status = status;
  product.description = description;
  product.categories = categories;
  try {
    await product.save();
  } catch (err) {
    return next(new HttpError("Something Went wrong! Try again.", 500));
  }
  res.status(200).json({ product: product.toObject({ getters: true }) });
};

const deleteProduct = async (req, res, next) => {
  const productId = req.params.pid;
  let product;
  try {
    product = await Product.findById(productId);
  } catch (err) {
    return next(new HttpError("Feching product failed! Try again.", 500));
  }
  if (!product) {
    return next(new HttpError("No product found for this id.", 404));
  }
  try {
    await product.remove();
  }catch(err) {
    return next(new HttpError("Could not delete product.", 500));
  }
  //   200 success
  res.status(200).json({ message: `product deleted for product id ${productId}` });
};

const isProductExist = () => {};

export { getAllProducts, addProduct, getProduct, deleteProduct, editProduct };
