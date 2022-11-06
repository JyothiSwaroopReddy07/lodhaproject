const User = require("../models/UserModel");

// Create User
exports.createUser = async(req,res,next)=> {
    const user = await User.create(req.body);

    res.status(201).json({
        success: true,
        user
    })
}

// Get All users
exports.getAllusers = async(req,res) => {
    const UserData = await User.find()
    res.status(200).json({
        success: true,
        UserData
    });
}