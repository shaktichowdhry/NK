import express from "express";
import { check } from "express-validator";

import {
  getAllProducts,
  addProduct,
  getProduct,
  deleteProduct,
  editProduct,
} from "../controllers/productController.js";


const router = express.Router();

// validation middlewares objects
const addProductValidationRules = [
    // body() vs check()
    check('title').not().isEmpty(),
    check('mrp').not().isEmpty().isNumeric(),

];
const editProductValidationRules = [
  // body() vs check()
  check('title').not().isEmpty(),
  check('mrp').not().isEmpty().isNumeric(),

];


// routes
router.post("/add-product", addProductValidationRules, addProduct);
router.get("/:pid", getProduct);
router.delete("/:pid", deleteProduct);
router.patch("/edit/:pid",editProductValidationRules, editProduct);
router.get("/", getAllProducts);

export default router;
