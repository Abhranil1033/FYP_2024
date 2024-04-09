import mongoose from "mongoose";

const eventSchema = new mongoose.Schema({
    city:{
        type:String,
        required : [true,"Enter city"],
        trim: true
    },
    state:{
        type:String,
        required : [true,"Enter state"],
        trim: true
    },
    images: [
        {
            public_id: {
                type: String,
                required: true
            },
            url: {
                type: String,
                required: true
            }
        }
    ],
    details:{
        type : String,
        required : true
    },
    dateTime:{
        type : Date,
        required : true
    }
});

export default mongoose.model("events",eventSchema);