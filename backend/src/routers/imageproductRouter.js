
import express from 'express';
import { getimageproduct, getimageproductById, createimageproduct, updateimageproduct, deleteimageproduct } from '../controllers/imageproductController.js';
const imageproductRouter = express.Router();

imageproductRouter.get('/imageproduct', getimageproduct);
imageproductRouter.get('/imageproduct/:id', getimageproductById);
imageproductRouter.post('/imageproduct', createimageproduct);
imageproductRouter.put('/imageproduct/:id', updateimageproduct);
imageproductRouter.delete('/imageproduct/:id', deleteimageproduct);

export default imageproductRouter;