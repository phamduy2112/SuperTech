
import express from 'express';
import { getUser,createUser, updateUser } from '../controllers/userController.js';
const userRouter = express.Router();

userRouter.get('/users', getUser );
userRouter.post('/users', createUser);
userRouter.put('/users/:id', updateUser);
export default userRouter;