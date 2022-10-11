// const express = require('express/')
// const router = express.Router()
import { Router, response, request } from "express";
import { getMessage } from "../controllers/controller_auth/auth-controller.js";

const router = Router()

router.get('/', getMessage)


// module.exports =  router
export default router


