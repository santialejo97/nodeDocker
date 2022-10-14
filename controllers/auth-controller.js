import { response, request } from "express";
import { createJwt } from "../middleware/createJwt.js";
import bcrypt from "bcrypt";
import User from "../schemas/schema_user.js";

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
    const { password } = body;
    const salt = await bcrypt.genSalt(10);
    body.password = await bcrypt.hash(password.toString(), salt);

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
    console.log(error);
    console.log("error de consulta" + error);
  }
};

export const postLoginUser = async (req = request, res = response) => {
  const { password, email } = req.body;
  try {
    const userDB = await User.findOne({ email });
    if (!userDB) {
      return res.status(404).json({
        ok: false,
        msg: "Validar password o email",
      });
    }
    console.log(userDB);
    const validPassword = bcrypt.compareSync(password, userDB.password);

    if (!validPassword) {
      return res.status(404).json({
        ok: false,
        msg: "Validar password o email",
      });
    }

    const token = createJwt(userDB._id, email);
    res.status(200).json({
      ok: true,
      userDB,
      token,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      ok: false,
      msg: "Error interno del servidor hablar con el administrador",
    });
  }
};

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
    console.log(error);
    res.status(500).json({
      ok: false,
      msg: "Error interno del sevidor hable con el administrador",
    });
  }
};
