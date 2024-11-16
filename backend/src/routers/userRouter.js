import express from "express";
import {
  changePassword,
  forgetCheckCode,
  deleteEmployee,
  forgetCheckMail,
  getUser,
  login,
  loginFacebook,
  logout,
  register,
  resetPasswordNoToken,
  resetToken,
  updateImage,
  updateUser,
  userDetail,
  verifyOldPassword,
  createUser,
  UpdateUsersAdmin,
  Checkuserdetailadmin,
} from "../controllers/userController.js";
import isAuthenticated from "../config/auth.js";
import { middleToken } from "../config/jwt.js";
const userRouter = express.Router();

userRouter.get("/users", getUser);
userRouter.post("/register", register);
userRouter.post("/login", login);
userRouter.post("/reset-token", resetToken);
userRouter.post("/login-facebook", loginFacebook);
userRouter.get("/logout", logout);
// userRouter.get('/users',middleToken, getUser );
userRouter.put("/user-upload-image", middleToken, updateImage);
userRouter.get("/user-detail", userDetail);
userRouter.put("/user-update", middleToken, updateUser);
userRouter.post("/verify-password", middleToken, verifyOldPassword);
userRouter.put("/change-password", middleToken, changePassword);
userRouter.delete("/remove-employee/:id", deleteEmployee);

userRouter.post("/forget-check-mail", forgetCheckMail);
userRouter.post("/forget-check-code", forgetCheckCode);
userRouter.put("/forget-reset-password", resetPasswordNoToken);

userRouter.post("/create-users", createUser);
userRouter.get("/user_detail_admin/:id", Checkuserdetailadmin);
userRouter.get("/update-users-admin/:id", UpdateUsersAdmin);

export default userRouter;
