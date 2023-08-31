import { Router } from "express";
import { ping } from "../controllers/index.cotrollers.js"

const router = Router()

router.get('/ping',ping)

export default router