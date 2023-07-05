import express from "express";
import dotenv from "dotenv";

import cors from "cors";
import connectDb from "./config/db.js";
import productRoutes from "./routes/productRoutes.js";

dotenv.config();
connectDb();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());

app.get("/api", (req, res) => {
  res.json("this is server");
});

app.use("/api/products", productRoutes);

app.listen(port, () => {
  console.log(`app is running on port ${port}`);
});
