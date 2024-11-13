
import express from 'express';
import isAuthenticated from '../config/auth.js';
import { middleToken } from '../config/jwt.js';
import { getimageproduct, getimageproductById, createimageproduct, updateimageproduct, deleteimageproduct } from '../controllers/imageproductController.js';
import { upload } from '../config/upload.js';
const imageproductRouter = express.Router();

imageproductRouter.get('/imageproduct', getimageproduct);
imageproductRouter.get('/imageproduct/:id', getimageproductById);
imageproductRouter.post('/imageproduct-create',middleToken, createimageproduct);
imageproductRouter.put('/imageproduct-edit/:id',middleToken, updateimageproduct);
imageproductRouter.delete('/imageproduct-delete/:id',middleToken, deleteimageproduct);

export default imageproductRouter;