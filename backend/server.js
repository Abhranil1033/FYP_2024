import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import bodyParser from "body-parser";
import errorMiddleware from "./middlewares/error.js";

import { Server } from "socket.io";
import {createServer} from "http";

import cloudinary from "cloudinary";
// import fileUpload from "express-fileupload";


//route imports
import auth from "./routes/authRoute.js";
import event from "./routes/eventRoutes.js";
import chats from "./routes/chatRoutes.js";

const app = express();
const server = createServer(app);
const io = new Server(server);

//Config
dotenv.config({ path: "backend/config/config.env" });

// database config
connectDB();

//connecting to cloudinary
cloudinary.v2.config({
    cloud_name : process.env.CLOUDINARY_NAME,
    api_key : process.env.CLOUDINARY_API_KEY,
    api_secret : process.env.CLOUDINARY_API_SECRET
});


app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
// app.use(fileUpload({
//     limits: { fileSize: 50 * 1024 * 1024 }
// }));


//routes
app.use("/api/v1/", auth);
app.use("/api/v1/", event);
app.use("/api/v1/",chats);


//socket.io configuration
//io is the entire circuit, socket is the indivdual user
io.on("connection",(socket)=>{
    console.log("User Connected");
    console.log("ID",socket.id);
})

//middleware for error
app.use(errorMiddleware);


app.listen(process.env.PORT, () => {
    console.log(`Server is running at ${process.env.PORT}`)
})