import express from "express";
import {
  getProductById,
  getProducts,
} from "../controllers/productController.js";

const router = express.Router();

router.route("/").get(getProducts);
//router.get("/", getProducts);

router.route("/:id").get(getProductById);
//router.get("/:id", getProductById);

export default router;
