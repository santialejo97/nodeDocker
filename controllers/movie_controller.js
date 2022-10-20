import { request, response } from "express";
import fetch from "node-fetch";

export const moviePopular = async (req = request, res = response) => {
  const page = req.query.page;
  console.log(page);
  try {
    const respo = await fetch(
      `https://api.themoviedb.org/3/movie/popular?page=${page}`,
      {
        headers: {
          Authorization: `Bearer ${process.env.TOKEN_TMDB}`,
        },
      }
    );

    const movie = await respo.json();
    res.status(200).json({
      ok: true,
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
