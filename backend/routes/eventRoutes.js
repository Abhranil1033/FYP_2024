import express  from "express";
import { getAllEvents,createEvent,getEventDetails } from "../controllers/eventController.js";
import singleUpload from "../middlewares/multer.js";

const router = express.Router();

router.get("/events",getAllEvents);
// router.post("/event/new",singleUpload, createEvent);
router.route("/event/new").post(singleUpload, createEvent);
router.get("/events/:id",getEventDetails);


export default router;