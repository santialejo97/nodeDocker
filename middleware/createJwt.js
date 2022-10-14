import { request, response } from "express";

import jwt from "jsonwebtoken";

export const createJwt = (id, email) => {
  const payload = {
    uuid: id,
    email,
  };
  return jwt.sign(payload, process.env.JWTSECRET, { expiresIn: "24h" });
};
