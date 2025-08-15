import express from 'express';
import { createUser, getUser, googleLogin, loginUser, resetPassword, sendOTP } from '../controllers/userController.js';

const userRouter = express.Router();
userRouter.post("/",createUser)
userRouter.get("/",getUser)
userRouter.post("/login",loginUser)
userRouter.post("/google-login", googleLogin)
userRouter.post("/send-otp", sendOTP)
userRouter.post("/reset-password",resetPassword)


export default userRouter;