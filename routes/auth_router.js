// const express = require('express/')
// const router = express.Router()
import { Router, response, request } from "express";

const router = Router()

router.get('/', (req = request, res = response) => {
    res.send('Hola mundo Docker')
})

// module.exports =  router
export default router


