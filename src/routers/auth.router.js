import authController from "../controllers/auth.controller.js";
import { Router } from 'express'
import authMiddleware from "../middlewares/auth.middleware.js";


const authRouter = Router()
/**
 * @swagger
 * /api/register:
 *   post:
 *     summary: Create a new user
 *     requestBody:
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               login:
 *                 type: string
 *               password:
 *                 type: string
 *             required:
 *               - name
 *               - login
 *               - password
 *     responses:
 *       '200':
 *         description: token
 */
authRouter.post('/register', authController.register)

/**
 * @swagger
 * /api/login:
 *   post:
 *     summary: Login (get jwt)
 *     requestBody:
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               login:
 *                 type: string
 *               password:
 *                 type: string
 *             required:
 *               - login
 *               - password
 *     responses:
 *       '200':
 *         description: token
 */
authRouter.post('/login', authController.login)


export default authRouter