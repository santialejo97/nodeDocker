// const express = require('express/')
// const router = express.Router()
import { Router } from "express";
import { check } from "express-validator";
import {
  buildJwt,
  postCreateUser,
  postLoginUser,
} from "../controllers/controller_auth/auth-controller.js";
import { createJwt } from "../middleware/createJwt.js";
import { valida_error } from "../middleware/validate_error.js";

const router = Router();

router.post(
  "/register",
  [
    check("email", "tiene que ser un email valido").isEmail(),
    check("name", "El nombre tiene que se mayor a 3 caracteres").isLength({
      min: 4,
    }),
    check("password").isLength({ min: 8 }),
    valida_error,
  ],
  postCreateUser
);

router.post(
  "/login",
  [
    check("email", "tiene que ser un email valido").isEmail(),
    check("password").isLength({ min: 8 }),
    valida_error,
  ],
  postLoginUser
);

router.get("/renew", createJwt, buildJwt);

// module.exports =  router
export default router;
