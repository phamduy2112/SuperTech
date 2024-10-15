
import express from 'express';
import {  changePassword, getUser,login,logout,register, updateImage, updateUser, userDetail, verifyOldPassword } from '../controllers/userController.js';
import isAuthenticated from '../config/auth.js';
const userRouter = express.Router();


userRouter.post('/register', register);
userRouter.post('/login', login);
userRouter.get("/logout",logout)
userRouter.get('/users', getUser );
userRouter.put('/user-upload-image',isAuthenticated,updateImage)
userRouter.get('/usersDetail',isAuthenticated, userDetail);
userRouter.put("/user-update",isAuthenticated,updateUser)
userRouter.post ("/verify-password",isAuthenticated,verifyOldPassword)
userRouter.post ("/change-password",isAuthenticated,changePassword)

// userRouter.post("/forget-check-mail",forgetCheckMail)
// userRouter.post("/forget-check-code",forgetCheckCode)
export default userRouter;