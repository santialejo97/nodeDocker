// const express = require('express')
// require('dotenv').config()
// const router = require('./routes/auth_router.js')
import express from "express";
import * as dotenv from "dotenv";
import auth from "./routes/auth_router.js";
import db from "./db/db_connect.js";
import seed from "./routes/seed_router.js";
import path from "path";

dotenv.config({
  path: `./.env`,
});

const app = express();

db();
app.use(express.json());

app.use("/auth", auth);
app.use("/seed", seed);

app.listen(process.env.PORT || 3000, () => {
  console.log("Corriendo aplicacion servidor PORT: " + process.env.PORT);
});
