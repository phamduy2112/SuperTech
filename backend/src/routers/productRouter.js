import express from "express";
import isAuthenticated from "../config/auth.js";
import { middleToken } from "../config/jwt.js";
import {
  getProducts,
  getProductsByCategoryId,
  getProductById,
  createProduct,
  updateProduct,
  deleteProduct,
  getProductByIdCatelogryDad,
  getinFor,
} from "../controllers/productController.js";
const productRouter = express.Router();

productRouter.get("/products", getProducts);
productRouter.get("/products/categories/:categoryId", getProductsByCategoryId);
productRouter.get("/list-product-catelories", getProductByIdCatelogryDad);
productRouter.get("/product-detail/:id", getProductById);
productRouter.post("/create-products", middleToken, createProduct);
productRouter.put("/products-edit/:id", middleToken, updateProduct);
productRouter.delete("/products-delete/:id", middleToken, deleteProduct);
productRouter.get("/getinFor", getinFor);

export default productRouter;
