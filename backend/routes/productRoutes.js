import express from "express";
import asyncHandler from "../middleware/asyncHandler.js";
import Product from "../models/productModel.js";

const router = express.Router();

router.get(
  "/",
  asyncHandler(async (req, res) => {
    const products = await Product.find({});
    res.json(products);
  })
);

router.get(
  "/:id",
  asyncHandler(async (req, res) => {
    const { id } = req.params;
    let product = await Product.findById({ _id: id });
    if (product) {
      res.send(product);
    }
    res.status(404).json({ message: "Product not found" });
  })
);

export default router;
