import express from 'express';
import { uploadFields, uploadImages } from '../controllers/uploadController.js';
import { middleToken } from '../config/jwt.js';
const uploadRouter = express.Router();

uploadRouter.post('/upload-images',middleToken, uploadFields, uploadImages);

export default uploadRouter;