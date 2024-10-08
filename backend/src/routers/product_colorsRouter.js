
import express from 'express';
import { getProduct_colors, getProduct_colorsById, createProduct_colors, updateProduct_colors, deleteProduct_colors } from '../controllers/product_colorsController.js';
const product_colorsRouter = express.Router();

product_colorsRouter.get('/product_colors', getProduct_colors);
product_colorsRouter.get('/product_colors/:id', getProduct_colorsById);
product_colorsRouter.post('/product_colors', createProduct_colors);
product_colorsRouter.put('/product_colors/:id', updateProduct_colors);
product_colorsRouter.delete('/product_colors/:id', deleteProduct_colors);

export default product_colorsRouter;