import userModel from "../models/userModel.js";
import JWT from "jsonwebtoken";


export const registerController = async (req, res) => {
  try {
    const { name, email, password, phone, address, answer } = req.body;
    //validations
    if (!name) {
      return res.send({ message: "Name is Required" });
    }
    if (!email) {
      return res.send({ message: "Email is Required" });
    }
    if (!password) {
      return res.send({ message: "Password is Required" });
    }
    if (!phone) {
      return res.send({ message: "Phone no is Required" });
    }
    if (!address) {
      return res.send({ message: "Address is Required" });
    }
    if (!answer) {
      return res.send({ message: "answer is Required" });
    }

    //check user
    const existinguser = await userModel.findOne({ email });
    //exisiting user
    if (existinguser) {
      return res.status(200).send({
        success: false,
        message: "Already registered. Please login",
      });
    }

    const user = await new userModel({
      name,
      email,
      phone,
      address,
      password,
      answer
    }).save();

    res.status(201).send({
      success: true,
      message: "User Register Successfully",
      user,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Error in Registration",
      error,
    });
  }
};




export const loginController = async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res.status(404).send({
        success: false,
        message: "Enter both email and password"
      })
    }

    // check if user is registered
    const user = await userModel.findOne({ email }).select("+password");

    if (!user) {
      return res.status(404).send({
        status: false,
        message: "Email not registered",

      })
    }

    // const match = await comparePassword(password,user.password);
    const isPasswordMatched = await user.comparePassword(password);

    if (!isPasswordMatched) {
      return res.status(200).send({
        success: false,
        message: "Invalid email or password"
      })
    }
    // token
    const token = await JWT.sign({ _id: user._id }, process.env.JWT_SECRET, {
      expiresIn: "7d"
    });

    res.status(200).send({
      success: true,
      message: "login Successful",
      user: {
        _id: user._id,
        name: user.name,
        email: user.email,
        phone: user.phone,
        address: user.address,

      },
      token

    });


  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Error in login",
      error
    })

  }
};


// adding to the uploads

export const adduploadController = async (req, res) => {
  try {
    const userEmail = req.body.Email;
    const user = await userModel.findOne({ email: userEmail });
    if (user) {
      user.upload += 1; // Use '+=' to increment the value
      await user.save();
      res.status(200).send({
        success: true,
        message: "increased the upload value",
        user,
      });
    } else {
      res.status(404).send({
        success: false,
        message: "user not found",
      });
    }
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "server error",
      error,
    });
  }
};
