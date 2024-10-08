
import express from 'express';
import { getUser, register } from '../controllers/userController.js';
const userRouter = express.Router();

userRouter.get('/users', getUser );
userRouter.post('/register', register );

export default userRouter;