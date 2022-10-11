import { response, request } from "express";


export const getMessage = async (req = request, res = response) =>{
    res.send('Hola mundo Docker')
}



