import mongoose from "mongoose";
import bcrypt from "bcryptjs";

const userSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
        trim:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true,
        
    },
    phone:{
        type:String,
        required:true,
        
    },
    address:{
        type:String,
        required:true,
        
    },
    answer:{
        type:String,
        required: true,
    },

    upload:{
        type:Number,
        required:true,
        default: 0
    }

}, {timestamp:true});

userSchema.pre("save", async function (next) {
    //while updating details,if password is not changed,the we need not convert the already existing password into hash as it is already hashed. Hashing one more time will lead to faulty result
    if (!this.isModified("password")) {
        next();
    }
    this.password = await bcrypt.hash(this.password, 10);
});

//Compare Password
userSchema.methods.comparePassword = async function(enteredPassword){
    return await bcrypt.compare(enteredPassword,this.password);
}

export default mongoose.model("user",userSchema);