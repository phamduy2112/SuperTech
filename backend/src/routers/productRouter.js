
import express from 'express';
import { getProducts,getProductsByCategoryId, getProductById, createProduct, updateProduct, deleteProduct, getProductByIdCatelogryDad } from '../controllers/productController.js';
const productRouter = express.Router();

productRouter.get('/products', getProducts);
productRouter.get('/products/categories/:categoryId', getProductsByCategoryId);
productRouter.get('/list-product-catelories', getProductByIdCatelogryDad);
productRouter.get('/product-detail/:id', getProductById);
productRouter.post('/products', createProduct);
productRouter.put('/products/:id', updateProduct);
productRouter.delete('/products/:id', deleteProduct);

export default productRouter;