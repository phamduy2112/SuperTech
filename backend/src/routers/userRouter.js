
import express from 'express';
import {  changePassword, forgetCheckCode, forgetCheckMail, getUser,login,loginFacebook,logout,register, resetToken, updateImage, updateUser, userDetail, verifyOldPassword } from '../controllers/userController.js';
import isAuthenticated from '../config/auth.js';
import { middleToken } from '../config/jwt.js';
const userRouter = express.Router();


userRouter.post('/register', register);
userRouter.post('/login', login);
userRouter.post('/reset-token', resetToken);
userRouter.post('/login-facebook', loginFacebook);
userRouter.get("/logout",logout)
userRouter.get('/users',middleToken, getUser );
userRouter.put('/user-upload-image',middleToken,updateImage)
userRouter.get('/user-detail',middleToken, userDetail);
userRouter.put("/user-update",middleToken,updateUser)
userRouter.post ("/verify-password",middleToken,verifyOldPassword)
userRouter.put ("/change-password",middleToken,changePassword)

userRouter.post("/forget-check-mail",forgetCheckMail)
userRouter.post("/forget-check-code",forgetCheckCode)
export default userRouter;