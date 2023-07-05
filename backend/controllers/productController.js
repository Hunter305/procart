import asyncHandler from "../middleware/asyncHandler.js";
import Product from "../models/productModel.js";

const getProducts = asyncHandler(async (req, res) => {
  const products = await Product.find({});
  res.json(products);
});

const getProductById = asyncHandler(async (req, res) => {
  const { id } = req.params;
  let product = await Product.findById({ _id: id });
  if (product) {
    res.send(product);
  } else {
    res.status(404);
    throw new Error("Product not found");
  }
});

export { getProductById, getProducts };
