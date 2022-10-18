import { Router } from "express";
import { moviePopular } from "../controllers/movie_controller.js";

const router = Router();

router.get("/popular", moviePopular);

export default router;
