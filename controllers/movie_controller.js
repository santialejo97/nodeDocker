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
      msg: "validar logs",
    });
  }
};

export const searchMovie = async (req = request, res = response) => {
  const pelicula = req.query.peli;
  try {
    const respo = await fetch(
      `https://api.themoviedb.org/3/search/movie?query=${pelicula}`,
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
      msg: "validar logs",
    });
  }
};

export const findMovie = async (req = request, res = response) => {
  const pelicula = req.headers.movieid;

  try {
    const respo = await fetch(
      `https://api.themoviedb.org/3/movie/${pelicula}`,
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
      msg: "validar logs",
    });
  }
};

export const getCast = async (req = request, res = response) => {
  const pelicula = req.headers.movieid;
  try {
    const respo = await fetch(
      `https://api.themoviedb.org/3/movie/${pelicula}/credits`,
      {
        headers: {
          Authorization: `Bearer ${process.env.TOKEN_TMDB}`,
        },
      }
    );
    const cast = await respo.json();
    res.status(200).json({
      ok: true,
      cast: cast.cast,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      ok: false,
      msg: "validar logs",
    });
  }
};
