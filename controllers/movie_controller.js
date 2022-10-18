import { request, response } from "express";
import fetch from "node-fetch";

export const moviePopular = async (req = request, res = response) => {
  try {
    const respo = await fetch("https://api.themoviedb.org/3/movie/popular", {
      headers: {
        Authorization: `Bearer ${process.env.TOKEN_TMDB}`,
      },
    });
    console.log(respo);
    const movie = await respo.json();
    res.status(200).json({
      ok: true,
      msg: "peliculas",
      movie,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      ok: false,
      mfg: "validar logs",
    });
  }
};
