
import express from 'express';
import isAuthenticated from '../config/auth.js';
import { middleToken } from '../config/jwt.js';
import { getProducts,getProductsByCategoryId, getProductById, createProduct, updateProduct, deleteProduct, getProductByIdCatelogryDad, deleteProductColor, getProductsAdmin, updateQualityProduct } from '../controllers/productController.js';
import { deleteProduct_colors } from '../controllers/product_colorsController.js';
const productRouter = express.Router();

productRouter.get('/products',getProducts);
productRouter.get('/products/categories/:categoryId', getProductsByCategoryId);
productRouter.get('/list-product-catelories', getProductByIdCatelogryDad);
productRouter.get('/product-detail/:id', getProductById);
productRouter.post('/create-products',middleToken, createProduct);
productRouter.put('/products-edit/:id',middleToken, updateProduct);
productRouter.get('/get-products-admin', getProductsAdmin);
productRouter.put('/update-quality-product/:id', updateQualityProduct);
productRouter.delete('/products-delete/:id',middleToken, deleteProduct);
productRouter.delete('/product-color-delete/:id',middleToken,deleteProductColor);

export default productRouter;