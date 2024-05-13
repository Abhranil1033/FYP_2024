import express  from "express";
import { createGroupChat, addNewUser,getChatDetails } from "../controllers/chatController.js";


const router = express.Router();


router.post("/chat/new",createGroupChat);
router.put("/chat/add",addNewUser);
router.get("/chat/:id",getChatDetails);


export default router;