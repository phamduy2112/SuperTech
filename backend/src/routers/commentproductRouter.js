
import express from 'express';
import { getcommentproduct, getcommentproductById, createcommentproduct, updatecommentproduct, deletecommentproduct, getCommentProductByIdProduct } from '../controllers/commentproductController.js';
import { middleToken } from '../config/jwt.js';
const commentproductRouter = express.Router();

commentproductRouter.get('/commentproduct', getcommentproduct);
commentproductRouter.get('/get-commemt/:id', getcommentproductById);
commentproductRouter.get("/get-comment-by-id-product/:id",getCommentProductByIdProduct)
commentproductRouter.post('/create-comment', middleToken,createcommentproduct);
commentproductRouter.put('/put-comment/:id',middleToken, updatecommentproduct);
commentproductRouter.delete('/detele-comment/:id',middleToken, deletecommentproduct);

export default commentproductRouter;