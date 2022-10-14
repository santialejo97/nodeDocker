import { request, response } from "express";
import jwt from "jsonwebtoken";

export const validaJWT = async (req = request, res = response, next) => {
  const token = req.body.token;
  try {
    const payload = jwt.verify(token, process.env.JWTSECRET);
    req.body.email = payload.email;
    req.body.id = payload.uuid;
    next();
  } catch (error) {
    throw new Error(error);
    res.status(404).json({
      ok: false,
      msg: "No se cuenta con un token",
    });
  }
};
