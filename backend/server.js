import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import bodyParser from "body-parser";
import errorMiddleware from "./middlewares/error.js";

//route imports
import auth from "./routes/authRoute.js";
import event from "./routes/eventRoutes.js"

const app = express();

//Config
dotenv.config({ path: "backend/config/config.env" });

// database config
connectDB();


app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));


//routes
app.use("/api/v1/", auth);
app.use("/api/v1/", event);

//middleware for error
app.use(errorMiddleware);


app.listen(process.env.PORT, () => {
    console.log(`Server is running at ${process.env.PORT}`)
})