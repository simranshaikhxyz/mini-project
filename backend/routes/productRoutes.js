import express from "express";
import {
  createProduct,
  getProducts,
  getProductById,
  updateProduct,
  deleteProduct,
} from "../controllers/productController.js";

import { protect } from "../middleware/authMiddleware.js";
import { admin } from "../middleware/adminMiddleware.js";
import upload from "../middleware/uploadMiddleware.js";

const router = express.Router();

// =======================
// Public Routes
// =======================

router.get("/", getProducts);
router.get("/:id", getProductById);

// =======================
// Admin Routes
// =======================

// Add Product with Image Upload
router.post(
  "/",
  protect,
  admin,
  upload.single("image"),
  createProduct
);

// Update Product
router.put("/:id", protect, admin, updateProduct);

// Delete Product
router.delete("/:id", protect, admin, deleteProduct);

export default router;