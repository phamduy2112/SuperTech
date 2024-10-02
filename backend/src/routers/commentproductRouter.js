
import express from 'express';
import { getcommentproduct, getcommentproductById, createcommentproduct, updatecommentproduct, deletecommentproduct } from '../controllers/commentproductController.js';
const commentproductRouter = express.Router();

commentproductRouter.get('/commentproduct', getcommentproduct);
commentproductRouter.get('/commentproduct/:id', getcommentproductById);
commentproductRouter.post('/commentproduct', createcommentproduct);
commentproductRouter.put('/commentproduct/:id', updatecommentproduct);
commentproductRouter.delete('/commentproduct/:id', deletecommentproduct);

export default commentproductRouter;