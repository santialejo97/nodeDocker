// const express = require('express')
// require('dotenv').config()
// const router = require('./routes/auth_router.js')
import express from "express";
import * as dotenv from "dotenv";
import auth from "./routes/auth_router.js";
import db from "./db/db_connect.js";
import seed from "./routes/seed_router.js";
import movie from "./routes/movie_router.js";
import cors from "cors";

dotenv.config({
  path: `./.env`,
});

const app = express();
app.use(
  cors({
    origin: true,
  })
);
db();
app.use(express.json());

app.use("/auth", auth);
app.use("/seed", seed);
app.use("/movie", movie);

app.listen(process.env.PORT || 3000, () => {
  console.log("Corriendo aplicacion servidor PORT: " + process.env.PORT);
});
