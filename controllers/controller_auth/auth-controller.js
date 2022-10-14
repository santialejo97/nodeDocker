import { response, request } from "express";
import { createJwt } from "../../middleware/createJwt.js";

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

    const token = createJwt(user.id, req.body.email);

    res.status(200).json({
      ok: true,
      msg: "usuario creado",
      user,
      token,
    });
  } catch (error) {
    console.log("error de consulta" + error);
  }
};

export const postLoginUser = async (req = request, res = response) => {};

export const buildJwt = async (req = request, res = response) => {
  const uuid = req.body.uuid;
  const email = req.body.email;
  try {
    const userDB = await User.findOne({ email });
    if (!userDB) {
      return res.status(400).json({
        ok: false,
        msg: "el usuario no existe",
      });
    }
    const token = createJwt(uuid, email);
    res.status(200).json({
      ok: true,
      token,
    });
  } catch (error) {
    throw new Error(error);
    res.status(500).json({
      ok: false,
      msg: "Error interno del sevidor hable con el administrador",
    });
  }
};
