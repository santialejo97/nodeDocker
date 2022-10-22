import { Router } from "express";
import {
  findMovie,
  getCast,
  moviePopular,
  searchMovie,
} from "../controllers/movie_controller.js";

const router = Router();

router.get("/popular", moviePopular);
router.get("/search", searchMovie);
router.get("/findmovie", findMovie);
router.get("/cast", getCast);

export default router;
