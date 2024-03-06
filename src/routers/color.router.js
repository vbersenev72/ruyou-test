import { Router } from "express";
import authMiddleware from "../middlewares/auth.middleware.js";
import colorController from "../controllers/color.controller.js";


const colorRouter = Router()


colorRouter.post('/create', authMiddleware, colorController.createColor) //
colorRouter.post('/update', authMiddleware, colorController.updateColor) //
colorRouter.post('/delete', authMiddleware, colorController.deleteColor) //
colorRouter.get('/all/:id', authMiddleware, colorController.getAllByPaletteId) //
colorRouter.get('/:id', authMiddleware, colorController.getOneById) //


export default colorRouter