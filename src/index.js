import dotenv from "dotenv"
import express from "express"
import mongoose from "mongoose";
import { DB_NAME } from "./constants.js";
//import dotenv, { config } from "dotenv"
import connectDB from "./db/index.js";

dotenv.config({
    path:'./.env'
})

const app=express();

connectDB()

.then(()=>{
    app.listen(process.env.PORT || 5000,()=>{
        console.log('server is running at PORT:${process.env.PORT || 5000}');
    })
})
.catch((error)=>{
    console.log("MOngoDB connection failed!!",error);
})