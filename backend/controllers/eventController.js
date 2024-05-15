import eventModel from "../models/eventModel.js";
import apiFeatures from "../helpers/apiFeatures.js";
import ErrorHandler from "../helpers/errorHandler.js";
// import getDataUri from "../helpers/dataUri.js";
// import {v2 as cloudinary} from "cloudinary";

//Create event
export const createEvent = async (req, res) => {
    try {
        // const file = req.files.images;
        // const myCloud = await cloudinary.v2.uploader.upload(file.tempFilePath, { folder: "FYP", width: 150, crop: "scale" });
        const file = req.file;
        console.log(file);

        // const fileUri = getDataUri(recfile);

        // const myCloud = await cloudinary.uploader.upload(fileUri.content);


        const { district, state, latitude, longitude, date, time, details, images } = req.body;

        const event = await new eventModel({
            district,
            state,
            latitude,
            longitude,
            date,
            time,
            details,
            images: {
                // public_id: myCloud.public_id,
                // url: myCloud.secure_url
                public_id:"sample id",
                url:"sample url"
            },
            chatId : req.body.chatId
        }).save();

        res.status(201).json({
            success: true,
            message: "Event created successfully",
            event
        })
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Internal Server Error",
            error: error.message,
        });
    }
}


//Get all events (Home)
export const getAllEvents = async (req, res) => {
    const itemsInAPage = 8;
    const totalItems = await eventModel.countDocuments();

    const apiFeature = new apiFeatures(eventModel.find(), req.query).search().pagination(itemsInAPage);
    
    const events = await apiFeature.query;
    // const Events = await eventModel.find();
    res.status(200).json({
        success: true,
        events,
        itemsInAPage,
        totalItems
    });
}


//Get Event details
export const getEventDetails = async (req, res, next) => {
    const event = await eventModel.findById(req.params.id);

    if (!event) {
        return next(new ErrorHandler("Not found", 404));
    }

    res.status(200).json({
        success: true,
        event
    })
}



