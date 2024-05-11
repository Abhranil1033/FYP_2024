import chatModel from "../models/chatModel.js";
import userModel from "../models/userModel.js";

export const createGroupChat = async (req, res) => {
    var users = JSON.parse(req.body.users);

    users.push(req.user);

    try {
        const groupChat = await chatModel.create({
            chatName: req.body.name,
            users: users,
            groupAdmin: req.user
        });

        const fullGroupChat = await chatModel.findOne({ _id: groupChat._id })
            .populate("users", "-password")
            .populate("groupAdmin", "-password");

        res.status(200).json(fullGroupChat);
    } catch (error) {
        res.status(400);
        throw new Error(error.message);
    }
}

export const addNewUser = async (req, res) => {
    const { chatId, userId } = req.body;

    const added = await chatModel.findByIdAndUpdate(chatId, {
        $push: { users: userId },
    },
        { new: true }
    )
        .populate("users", "-password")
        .populate("groupAdmin", "-password");

    if(!added){
        res.status(404);
        throw new Error("Chat not found");
    }else{
        res.json(added);
    }

}
