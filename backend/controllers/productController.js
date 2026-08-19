
import Product from "../models/Product.js";

// ======================
// Create Product
// ======================

export const createProduct = async (req, res) => {
  try {
    const {
      productName,
      description,
      price,
      materialType,
      thickness,
      dimensions,
      color,
      customizable,
      image,
    } = req.body;

    const product = await Product.create({
      productName,
      description,
      price,
      materialType,
      thickness,
      dimensions,
      color,
      customizable,
      image: image || "",
      createdBy: req.user._id,
    });

    res.status(201).json({
      message: "Product created successfully",
      product,
    });
  } catch (error) {
    console.error("Create Product Error:", error);

    res.status(500).json({
      message: error.message,
    });
  }
};

// ======================
// Get All Products
// ======================

export const getProducts = async (req, res) => {
  try {
    const products = await Product.find()
      .populate("createdBy", "name email")
      .sort({ createdAt: -1 });

    res.status(200).json(products);
  } catch (error) {
    console.error("Get Products Error:", error);

    res.status(500).json({
      message: error.message,
    });
  }
};

// ======================
// Get Single Product
// ======================

export const getProductById = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id).populate(
      "createdBy",
      "name email"
    );

    if (!product) {
      return res.status(404).json({
        message: "Product not found",
      });
    }

    res.status(200).json(product);
  } catch (error) {
    console.error("Get Product Error:", error);

    res.status(500).json({
      message: error.message,
    });
  }
};

// ======================
// Update Product
// ======================

export const updateProduct = async (req, res) => {
  try {
    const {
      productName,
      description,
      price,
      materialType,
      thickness,
      dimensions,
      color,
      customizable,
      image,
    } = req.body;

    const updateData = {
      productName,
      description,
      price,
      materialType,
      thickness,
      dimensions,
      color,
      customizable,
    };

    // Use the image URL sent from frontend
    if (image) {
      updateData.image = image;
    }

    const product = await Product.findByIdAndUpdate(
      req.params.id,
      updateData,
      {
        new: true,
        runValidators: true,
      }
    );

    if (!product) {
      return res.status(404).json({
        message: "Product not found",
      });
    }

    res.status(200).json({
      message: "Product updated successfully",
      product,
    });
  } catch (error) {
    console.error("Update Product Error:", error);

    res.status(500).json({
      message: error.message,
    });
  }
};

// ======================
// Delete Product
// ======================

export const deleteProduct = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);

    if (!product) {
      return res.status(404).json({
        message: "Product not found",
      });
    }

    await product.deleteOne();

    res.status(200).json({
      message: "Product deleted successfully",
    });
  } catch (error) {
    console.error("Delete Product Error:", error);

    res.status(500).json({
      message: error.message,
    });
  }
};
