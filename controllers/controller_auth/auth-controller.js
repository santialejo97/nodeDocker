import { response, request } from "express";

import User from "../../schemas/schema_user.js";

export const postCreateUser = async (req = request, res = response) => {
  const body = req.body;
  try {
    const userDB = await User.findOne({ email: req.body.email });
    if (userDB) {
      return res.status(400).json({
        ok: false,
        msg: "Este email ya se encuentra registrado",
      });
    }

    const user = await User.create({
      ...body,
    });

    res.status(200).json({
      ok: true,
      msg: "usuario creado",
      user,
    });
  } catch (error) {
    console.log("error de consulta" + error);
  }
};

export const postLoginUser = async (req = request, res = response) => {};

export const buildJwt = (req = request, res = response) => {
  console.log("JWT");
};
