import { response, request } from "express";
import { validationResult } from "express-validator";

export function valida_error(req, res, next) {
  try {
    const error = validationResult(req);

    if (!error.isEmpty()) {
      return res.status(404).json({
        ok: false,
        error,
      });
    }
    next();
  } catch (error) {
    res.status(500).json({
      ok: false,
      msg: "error interno del servidor hablar con el administrador",
    });
  }
}
