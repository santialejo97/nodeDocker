// const express = require('express')
// require('dotenv').config()
// const router = require('./routes/auth_router.js')
import express from "express";
import * as dotenv from "dotenv"
import  router  from "./routes/auth_router.js";
dotenv.config()

const app = express()

app.listen(process.env.PORT, () => {
    console.log('Corriendo aplicacion servidor PORT: '+ process.env.PORT)
})

app.use('/', router)