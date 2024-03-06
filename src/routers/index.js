import { Router } from "express";
import authRouter from "./auth.router.js";
import paletteRouter from "./palette.router.js";
import colorRouter from "./color.router.js";

const router = Router()

router.use('/auth', authRouter)
router.use('/palette', paletteRouter)
router.use('/color', colorRouter)

export default router