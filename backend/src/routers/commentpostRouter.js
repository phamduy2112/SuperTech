
import express from 'express';
import { getcommentpost, getcommentpostById, createcommentpost, updatecommentpost, deletecommentpost } from '../controllers/commentpostController.js';
const commentpostRouter = express.Router();

commentpostRouter.get('/commentpost', getcommentpost);
commentpostRouter.get('/commentpost/:id', getcommentpostById);
commentpostRouter.post('/commentpost', createcommentpost);
commentpostRouter.put('/commentpost/:id', updatecommentpost);
commentpostRouter.delete('/commentpost/:id', deletecommentpost);

export default commentpostRouter;