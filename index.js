// const express = require('express')
// require('dotenv').config()
// const router = require('./routes/auth_router.js')
import express from "express";
import * as dotenv from "dotenv";
import router from "./routes/auth_router.js";
import db from "./db/db_connect.js";

dotenv.config();

const app = express();

db();
app.use(express.json());
app.use("/auth", router);

app.listen(process.env.PORT || 3000, () => {
  console.log("Corriendo aplicacion servidor PORT: " + process.env.PORT);
});
