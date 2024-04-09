import eventModel from "../models/eventModel.js";
import apiFeatures from "../helpers/apiFeatures.js";
import ErrorHandler from "../helpers/errorHandler.js";

//Create event
export const createEvent = async (req, res) => {
    // req.body.user = req.user.id;

    const event = await eventModel.create(req.body);

    res.status(201).json({
        success: true,
        event
    })
}

//Get all events (Home)
export const getAllEvents = async (req, res) => {
    const itemsInAPage = 8;
    const totalItems = await eventModel.countDocuments();

    const apiFeature = new apiFeatures(eventModel.find(),req.query).pagination(itemsInAPage);
    const events = await apiFeature.query;

    res.status(200).json({
        success: true,
        events,
        itemsInAPage,
        totalItems
    });
}


//Get Event details
export const getEventDetails = async(req,res,next) => {
    const event = await eventModel.findById(req.params.id);

    if(!event){
        return next(new ErrorHandler("Not found",404));
    }
    
    res.status(200).json({
        success : true,
        event
    })
}



