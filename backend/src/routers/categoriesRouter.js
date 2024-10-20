
import express from 'express';
import { getcategories,getcategory_dad,getcategory_dadId, getcategoriesById, createcategories, updatecategories, deletecategories } from '../controllers/categoriesController.js';
const categoriesRouter = express.Router();

categoriesRouter.get('/categories', getcategories);
categoriesRouter.get('/categories_dad/:id', getcategory_dadId);
categoriesRouter.get('/categories_dad', getcategory_dad);
categoriesRouter.get('/categories/:id', getcategoriesById);
categoriesRouter.post('/categories', createcategories);
categoriesRouter.put('/categories/:id', updatecategories);
categoriesRouter.delete('/categories/:id', deletecategories);

export default categoriesRouter;