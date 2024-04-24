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
const addProductValidationRule = [
    check('title').not().isEmpty(),
    check('mrp').not().isEmpty().isNumeric(),

];


// routes
router.post("/add-product", addProductValidationRule, addProduct);
router.get("/:pid", getProduct);
router.delete("/:pid", deleteProduct);
router.put("/edit/:pid", editProduct);
router.get("/", getAllProducts);

export default router;
