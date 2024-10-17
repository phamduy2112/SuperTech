
import express from 'express';
import { getProducts, getProductById, createProduct, updateProduct, deleteProduct, getProductByIdCatelogryDad } from '../controllers/productController.js';
const productRouter = express.Router();

productRouter.get('/products', getProducts);
// productRouter.get('/product-by-cate-dad', getProductByIdCatelogryDad);
productRouter.get('/products/:id', getProductById);
productRouter.post('/products', createProduct);
productRouter.put('/products/:id', updateProduct);
productRouter.delete('/products/:id', deleteProduct);

export default productRouter;