import { request, response } from "express";
import { users } from "../middleware/seed.js";
import User from "../schemas/schema_user.js";
import bcrypt from "bcrypt";

export const getSeed = async (req = request, res = response) => {
  try {
    await User.deleteMany();
    const salt = await bcrypt.genSalt(10);
    console.log(salt);
    for (const user of users) {
      const { password, ...detail } = user;
      const pass = await bcrypt.hash(password, salt);
      User.create({
        ...detail,
        password: pass,
      });
    }

    res.status(200).json({
      ok: true,
      msg: "Executed seed",
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      ok: false,
      msg: "Error interno del servidor hablar con el administrador",
    });
  }
};
