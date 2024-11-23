
import express from 'express';
import { getcommentproduct, getcommentproductById, createcommentproduct, updatecommentproduct, deletecommentproduct, getCommentProductByIdProduct, likeComment, getLikeUser } from '../controllers/commentproductController.js';
import { middleToken } from '../config/jwt.js';
import { createRepliesComment} from '../controllers/replies_comment.js';
const commentproductRouter = express.Router();

commentproductRouter.get('/commentproduct', getcommentproduct);
commentproductRouter.get('/commentproduct/:id', getcommentproductById);
commentproductRouter.get('/get-like-user/:id', getLikeUser);

commentproductRouter.post('/create-like/:id',middleToken,likeComment)

commentproductRouter.get("/get-comment-by-id-product/:id",getCommentProductByIdProduct)
commentproductRouter.post('/create-comment', middleToken,createcommentproduct);
commentproductRouter.post("/create-replies-comment",middleToken,createRepliesComment)
commentproductRouter.put('/put-comment/:id',middleToken, updatecommentproduct);
commentproductRouter.delete('/detele-comment/:id',middleToken, deletecommentproduct);

export default commentproductRouter;