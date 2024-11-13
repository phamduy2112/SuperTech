import express from 'express';
import { uploadimagesUser } from '../controllers/uploadImageUserController.js';
import { middleToken } from '../config/jwt.js';

const uploadImgUserRouter = express.Router();

uploadImgUserRouter.post('/uploadimguser', middleToken, uploadimagesUser);

export default uploadImgUserRouter;