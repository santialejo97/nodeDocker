import { request, response } from "express";

export const createJwt = (req = request, res = response, next) => {
  console.log("Creando JWT");

  next();
};
