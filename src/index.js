import mongoose from "mongoose"
import express from "express"
const app = express()
import connectDB from "./db/index.js" 
// import dotenv from "dotenv"
// dotenv.config({
//     path: './env'
// })

import 'dotenv/config';

import { DB_NAME }  from "./constants.js"


connectDB()



















// ( async () => {
//     try {
//         await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
//         app.on("error", (err) => {
//             console.log("error", error);
//             throw err
//         })

//         app.listen((process.env.PORT), () => {
//             console.log(`Listening on Port: ${process.env.PORT}`);
//         })

//     } catch (error) {
//         console.error("Error: ", error)
//         throw error // NO specific need be as we arent catching it again.
//     }
// })()