
import express from 'express';
import { getcategories, getcategoriesById, createcategories, updatecategories, deletecategories } from '../controllers/categoriesController.js';
import { middleToken } from '../config/jwt.js';
const categoriesRouter = express.Router();

categoriesRouter.get('/categories',middleToken, getcategories);
// categoriesRouter.get('/categoriesDad', getCategorySummary);
categoriesRouter.get('/categories/:id', getcategoriesById);
categoriesRouter.post('/categories', createcategories);
categoriesRouter.put('/categories/:id', updatecategories);
categoriesRouter.delete('/categories/:id', deletecategories);

export default categoriesRouter;