import express  from "express";
import { createGroupChat, addNewUser } from "../controllers/chatController.js";


const router = express.Router();


router.post("/chat/new",createGroupChat);
router.put("/chat/add",addNewUser);


export default router;