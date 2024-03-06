import { Router } from "express";
import authMiddleware from "../middlewares/auth.middleware.js";
import colorController from "../controllers/color.controller.js";


const colorRouter = Router()


/**
 * @swagger
 * /api/color/create:
 *   post:
 *     summary: Create Color
 *     requestBody:
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               colorHex:
 *                 type: string
 *               paletteId:
 *                 type: string
 *             required:
 *               - colorHex
 *               - paletteId
 *     parameters:
 *       - in: header
 *         name: Authorization
 *         required: true
 *         schema:
 *           type: string
 *           default: 'Bearer {token}'
 *     responses:
 *       '200':
 *         description: created succesfully
 */
colorRouter.post('/create', authMiddleware, colorController.createColor) //

/**
 * @swagger
 * /api/color/update:
 *   post:
 *     summary: Update Color
 *     requestBody:
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               colorHex:
 *                 type: string
 *               colorId:
 *                 type: string
 *             required:
 *               - colorHex
 *               - colorId
 *     parameters:
 *       - in: header
 *         name: Authorization
 *         required: true
 *         schema:
 *           type: string
 *           default: 'Bearer {token}'
 *     responses:
 *       '200':
 *         description: updated succesfully
 */
colorRouter.post('/update', authMiddleware, colorController.updateColor) //

/**
 * @swagger
 * /api/color/delete:
 *   post:
 *     summary: Delete Color
 *     requestBody:
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               paletteId:
 *                 type: string
 *               colorId:
 *                 type: string
 *             required:
 *               - paletteId
 *               - colorId
 *     parameters:
 *       - in: header
 *         name: Authorization
 *         required: true
 *         schema:
 *           type: string
 *           default: 'Bearer {token}'
 *     responses:
 *       '200':
 *         description: Deleted succesfully
 */
colorRouter.post('/delete', authMiddleware, colorController.deleteColor) //

/**
 * @swagger
 * /api/color/all/{palette id}:
 *   get:
 *     summary: Get all colors by palette
 *     parameters:
 *       - in: header
 *         name: Authorization
 *         required: true
 *         schema:
 *           type: string
 *           default: 'Bearer {token}'
 *     responses:
 *       '200':
 *         description: Colors array
 */
colorRouter.get('/all/:id', authMiddleware, colorController.getAllByPaletteId) //

/**
 * @swagger
 * /api/color/{color id}:
 *   get:
 *     summary: Get one color
 *     parameters:
 *       - in: header
 *         name: Authorization
 *         required: true
 *         schema:
 *           type: string
 *           default: 'Bearer {token}'
 *     responses:
 *       '200':
 *         description: Color object
 */
colorRouter.get('/:id', authMiddleware, colorController.getOneById) //


export default colorRouter