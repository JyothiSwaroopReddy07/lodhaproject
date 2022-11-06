const User = require("../models/UserModel");
const ErrorHandler = require("../utils/errorhandler");
const catchAsyncErrors = require("../middleware/catchAsyncErrors");

// Create User
exports.createUser = catchAsyncErrors(async(req,res,next)=> {
    const user = await User.create(req.body);

    res.status(201).json({
        success: true,
        user
    })
});

// Get Single User
exports.getUser = catchAsyncErrors(async(req,res,next) => {
    const UserData = await User.findById(req.params.id)
    if(!UserData) {
        return next(new ErrorHandler("User not found",404));
    }
    res.status(200).json({
        success: true,
        UserData
    });
});

// Get All users
exports.getAllusers = catchAsyncErrors(async(req,res) => {
    const UserData = await User.find()
    res.status(200).json({
        success: true,
        UserData
    });
})

// Update User
exports.updateUser = catchAsyncErrors(async(req,res,next)=> {
    let user1 = await User.findById(req.params.id);
    if(!user1){
        return next(new ErrorHandler("User not found",404));
    }
    user1 = await User.findByIdAndUpdate(req.params.id, req.body, {new: true, 
        runValidator: true, useFindAndModify: false})
 
    res.status(200).json({
        success: true,
        user1
    })
});

// Delete User

exports.deleteUser = catchAsyncErrors(async(req,res,next) => {
    const user1 = await User.findById(req.params.id);
    if(!user1) {
        return next(new ErrorHandler("User not found",404));
    }
    await user1.remove();
    res.status(200).json({
        success: true,
        message: "User Deletion successful"
    })
});