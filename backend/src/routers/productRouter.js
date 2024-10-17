
import express from 'express';
import { getProducts,getProductsByCategoryId, getProductById, createProduct, updateProduct, deleteProduct } from '../controllers/productController.js';
const productRouter = express.Router();

productRouter.get('/products', getProducts);
productRouter.get('/products/categories/:categoryId', getProductsByCategoryId);
productRouter.get('/products/:id', getProductById);
productRouter.post('/products', createProduct);
productRouter.put('/products/:id', updateProduct);
productRouter.delete('/products/:id', deleteProduct);

export default productRouter;