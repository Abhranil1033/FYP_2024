import mongoose from "mongoose";

const eventSchema = new mongoose.Schema({
    district:{
        type:String,
        required : true,
        // trim: true
    },
    state:{
        type:String,
        required : true,
        trim: true
    },
    latitude:{
        type:String,
        // required : true,
        trim: true
    },
    longitude:{
        type:String,
        // required : true,
        trim: true
    },
    date:{
        type : Date,
        // required : true
    },
    time:{
        type : Date,
    },
    details:{
        type : String,
        // required : true
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
    // chatId:{
    //     type : String,
    //     requierd : true
    // },
    volunteers:{
        type:Number,
        requierd:true,
        default:0
    }
});

export default mongoose.model("events",eventSchema);