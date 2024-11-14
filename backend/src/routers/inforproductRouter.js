
import express from 'express';
import { getinforproduct, getinforproductById, createinforproduct, updateinforproduct, deleteinforproduct } from '../controllers/inforproductController .js';
const inforproductRouter = express.Router();

inforproductRouter.get('/inforproduct', getinforproduct);
inforproductRouter.get('/inforproduct/:id', getinforproductById);
inforproductRouter.post('/create-inforproduct', createinforproduct);
inforproductRouter.put('/inforproduct/:id', updateinforproduct);
inforproductRouter.delete('/inforproduct/:id', deleteinforproduct);

export default inforproductRouter;