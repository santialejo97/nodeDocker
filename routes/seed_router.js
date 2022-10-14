import { Router } from "express";
import { getSeed } from "../controllers/seed-controller.js";

const router = Router();

router.get("/", getSeed);

export default router;
