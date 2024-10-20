
import express from 'express';
import { getchat, getchatById, createchat, updatechat, deletechat } from '../controllers/chatController.js';
const chatRouter = express.Router();

chatRouter.get('/chat', getchat);
chatRouter.get('/chat/:id', getchatById);
chatRouter.post('/chat', createchat);
chatRouter.put('/chat/:id', updatechat);
chatRouter.delete('/chat/:id', deletechat);

export default chatRouter;