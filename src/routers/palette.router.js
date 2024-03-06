import { Router } from "express";
import authMiddleware from "../middlewares/auth.middleware.js";
import paletteController from "../controllers/palette.controller.js";


const paletteRouter = Router()


/**
 * @swagger
 * /api/palette/create:
 *   post:
 *     summary: Create palette
 *     requestBody:
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               namePalette:
 *                 type: string
 *             required:
 *               - namePalette
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
paletteRouter.post('/create', authMiddleware, paletteController.createPalette)

/**
 * @swagger
 * /api/palette/update:
 *   post:
 *     summary: Update palette
 *     requestBody:
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               namePalette:
 *                 type: string
 *               paletteId:
 *                 type: string
 *             required:
 *               - namePalette
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
 *         description: updated succesfully
 */
paletteRouter.post('/update', authMiddleware, paletteController.updatePalette)

/**
 * @swagger
 * /api/palette/delete/{palette id}:
 *   delete:
 *     summary: Delete palette
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
paletteRouter.delete('/delete/:id', authMiddleware, paletteController.deletePalette)

/**
 * @swagger
 * /api/palette/all:
 *   get:
 *     summary: Get all palettes
 *     parameters:
 *       - in: header
 *         name: Authorization
 *         required: true
 *         schema:
 *           type: string
 *           default: 'Bearer {token}'
 *     responses:
 *       '200':
 *         description: Palettes array
 */
paletteRouter.get('/all', authMiddleware, paletteController.getAllByUser)

/**
 * @swagger
 * /api/palette/{palette id}:
 *   get:
 *     summary: Get one palette
 *     parameters:
 *       - in: header
 *         name: Authorization
 *         required: true
 *         schema:
 *           type: string
 *           default: 'Bearer {token}'
 *     responses:
 *       '200':
 *         description: Palette
 */
paletteRouter.get('/:id', authMiddleware, paletteController.getPaletteById)


export default paletteRouter