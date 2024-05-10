import mongoose from "mongoose";

const messageSchema = new mongoose.schema({
    
    sender : {
        type : mongoose.Schema.Types.ObjectId,
        ref : "user"
    },
    content : {
        type : String,
        trim : true
    },
    chat : {
        type : mongoose.Schema.Types.ObjectId,
        ref : "chat"
    }
},{timestamp:true});

export default mongoose.model("message",messageSchema);