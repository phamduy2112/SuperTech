
import express from 'express';
import isAuthenticated from '../config/auth.js';
import { middleToken } from '../config/jwt.js';
import { getinforproduct, getinforproductById, createinforproduct, updateinforproduct, deleteinforproduct } from '../controllers/inforproductController .js';
const inforproductRouter = express.Router();

inforproductRouter.get('/inforproduct', getinforproduct);
inforproductRouter.get('/inforproduct/:id', getinforproductById);
inforproductRouter.post('/inforproduct-create',middleToken, createinforproduct);
inforproductRouter.put('/inforproduct-edit/:id',middleToken, updateinforproduct);
inforproductRouter.delete('/inforproduct-delete/:id',middleToken, deleteinforproduct);

export default inforproductRouter;