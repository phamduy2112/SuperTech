
import express from 'express';
import { getPosts, getPostsById, createPosts, updatePosts, deletePosts } from '../controllers/postsController.js';
const PostsRouter = express.Router();

PostsRouter.get('/posts', getPosts);
PostsRouter.get('/posts/:id', getPostsById);
PostsRouter.post('/posts', createPosts);
PostsRouter.put('/posts/:id', updatePosts);
PostsRouter.delete('/posts/:id', deletePosts);

export default PostsRouter;