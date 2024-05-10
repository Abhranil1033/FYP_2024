import express  from "express";
import { createGroupChat } from "../controllers/chatController.js";


const router = express.Router();


router.post("/chat/new",createGroupChat);


export default router;