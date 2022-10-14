import { request, response } from "express";
import { users } from "../middleware/seed.js";
import User from "../schemas/schema_user.js";

export const getSeed = async (req = request, res = response) => {
  try {
    await User.deleteMany();

    users.map((user) =>
      User.create({
        ...user,
      })
    );

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
