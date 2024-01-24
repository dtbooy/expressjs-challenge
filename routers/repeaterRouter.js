import express from "express";

// Create instance of Router
const repeater = express.Router()

repeater.post('/', (req,res) =>{
    let message = req.body.message;
    if (message){
        res.json({message : message.repeat(2)})

    }
})

export {repeater}