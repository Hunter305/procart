import express from "express";
import dotenv from "dotenv";
import { notFound, errorHandler } from "./middleware/errorMiddleware.js";
import cors from "cors";
import colors from "colors";
import connectDb from "./config/db.js";
import productRoutes from "./routes/productRoutes.js";
import userRoutes from "./routes/userRoutes.js";
import cookieParser from "cookie-parser";

dotenv.config();
connectDb();

const app = express();

//body parser middleware
app.use(express.json()); // for raw json
app.use(express.urlencoded({ extended: true })); //for url parsing
app.use(cookieParser());
const port = process.env.PORT || 5000;

app.use(cors());

app.get("/api", (req, res) => {
  res.json("this is server");
});

app.use("/api/products", productRoutes);

app.use("/api/users", userRoutes);

app.use(notFound), app.use(errorHandler);

app.listen(port, () => {
  console.log(`app is running on port ${port}`.cyan);
});
