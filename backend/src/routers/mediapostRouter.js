
import express from 'express';
import { getmediapost, getmediapostById, createmediapost, updatemediapost, deletemediapost } from '../controllers/mediapostController.js';
const mediapostRouter = express.Router();

mediapostRouter.get('/mediapost', getmediapost);
mediapostRouter.get('/mediapost/:id', getmediapostById);
mediapostRouter.post('/mediapost', createmediapost);
mediapostRouter.put('/mediapost/:id', updatemediapost);
mediapostRouter.delete('/mediapost/:id', deletemediapost);

export default mediapostRouter;