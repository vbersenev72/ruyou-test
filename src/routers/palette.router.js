import { Router } from "express";
import authMiddleware from "../middlewares/auth.middleware.js";
import paletteController from "../controllers/palette.controller.js";


const paletteRouter = Router()


paletteRouter.post('/create', authMiddleware, paletteController.createPalette)
paletteRouter.post('/update', authMiddleware, paletteController.updatePalette)
paletteRouter.delete('/delete/:id', authMiddleware, paletteController.deletePalette)
paletteRouter.get('/all', authMiddleware, paletteController.getAllByUser)
paletteRouter.get('/:id', authMiddleware, paletteController.getPaletteById)


export default paletteRouter