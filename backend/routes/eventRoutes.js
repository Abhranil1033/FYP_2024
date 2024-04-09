import express  from "express";
import { getAllEvents,createEvent,getEventDetails } from "../controllers/eventController.js";


const router = express.Router();


router.get("/events",getAllEvents);
router.post("/event/new",createEvent);
router.get("/events/:id",getEventDetails);


export default router;