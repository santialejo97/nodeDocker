import { request, response } from "express";
import { users } from "../middleware/seed.js";
import User from "../schemas/schema_user.js";
import bcrypt from "bcrypt";

export const getSeed = async (req = request, res = response) => {
  try {
    await User.deleteMany();
    const salt = await bcrypt.genSalt(10);
    users.map(async (user) => {
      const { password, ...detail } = user;
      password = await bcrypt.hash(password, salt);
      User.create({
        ...detail,
        password,
      });
    });

    res.status(200).json({
      ok: true,
      msg: "Executed seed",
    });
  } catch (error) {
    res.status(500).json({
      ok: false,
      msg: "Error interno del servidor habalr con el administrador",
    });
  }
};
