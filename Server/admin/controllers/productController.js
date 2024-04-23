import HttpError from "../models/httpErrorModel.js";

let DUMMY_PRODUCTS = [
  {
    id: "p1",
    title: "",
    mrp: "",
    discount_mrp: "",
    image: "",
    more_images: [],
    description: "",
    status: "",
    categories: [],
    created_at: "",
    updated_at: "",
  },
];
const getAllProducts = (req, res, next) => {
  res.json({ message: "all products" });
};

const addProduct = (req, res, next) => {
  // because we added body parser
  const { title, mrp, description } = req.body;
  //   201 for success creation
  res.status(201).json({ message: "product added" });
};
const getProduct = (req, res, next) => {
  const productId = req.params.pid;
  if (false) {
    return next(new HttpError("product not found", 404));
  }
  res.json({ message: `product ${productId} description` });
};
const deleteProduct = (req, res, next) => {
  const productId = req.params.pid;
//   200 success
  res.status(200).json({ message: "product deleted" });
};
const editProduct = (req, res, next) => {
  const productId = req.params.pid;
  const { title, mrp, description } = req.body;
  res.status(200).json({ message: `product edit` });
};

export { getAllProducts, addProduct, getProduct, deleteProduct, editProduct };