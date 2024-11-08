import express from 'express';
import { uploadFields, uploadImages } from '../controllers/uploadController.js';

const uploadRouter = express.Router();

uploadRouter.post('/upload-images', uploadFields, uploadImages);

export default uploadRouter;