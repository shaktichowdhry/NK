import express from "express";
import {
  getAllProducts,
  addProduct,
  getProduct,
  deleteProduct,
  editProduct,
} from "../controllers/productController.js";

const router = express.Router();

router.post("/add-product", addProduct);
router.get("/:pid", getProduct);
router.delete("/:pid", deleteProduct);
router.put("/edit/:pid",editProduct);
router.get("/", getAllProducts);

export default router;
