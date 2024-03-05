import authController from "../controllers/auth.controller.js";
import { Router } from 'express'
import authMiddleware from "../middlewares/auth.middleware.js";


const authRouter = Router()

authRouter.post('/register', authController.register)
authRouter.post('/login', authController.login)


export default authRouter