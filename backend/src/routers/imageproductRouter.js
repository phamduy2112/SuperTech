
import express from 'express';
import { getimageproduct, getimageproductById, createimageproduct, updateimageproduct, deleteimageproduct } from '../controllers/imageproductController.js';
import { upload } from '../config/upload.js';
const imageproductRouter = express.Router();

imageproductRouter.get('/imageproduct', getimageproduct);
imageproductRouter.get('/imageproduct/:id', getimageproductById);
imageproductRouter.post('/image-product/:id',upload.single('image'), createimageproduct);
imageproductRouter.put('/imageproduct/:id', updateimageproduct);
imageproductRouter.delete('/imageproduct/:id', deleteimageproduct);

export default imageproductRouter;