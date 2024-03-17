import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import router from "./routes/authRoute.js"
import bodyParser from "body-parser";

const app = express();

//Config
dotenv.config({path:"backend/config/config.env"});
   // database config

   connectDB();
   app.use(express.json());
    app.use(bodyParser.urlencoded({extended:true}));
       
    //    routes
       app.use("/api/v1/auth",router);
app.listen(process.env.PORT,()=>{
    console.log(`Server is running at ${process.env.PORT}`)
})