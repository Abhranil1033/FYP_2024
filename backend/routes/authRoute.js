import express  from "express";
import { adduploadController, loginController, registerController } from "../controllers/authController.js";


const router = express.Router();


//LOGIN || POST 
router.post("/login",loginController);
router.post("/register",registerController);
router.post("/addupload",adduploadController);



export default router;