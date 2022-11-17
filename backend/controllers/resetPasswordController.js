const User = require("../models/UserModel");
const ErrorHandler = require("../utils/errorhandler");
const catchAsyncErrors = require("../middleware/catchAsyncErrors");






// Check If user Exists
exports.forgotPassword = catchAsyncErrors(async(req,res,next)=> {
    const {Email, FlatNo} = req.query;

    let user1 = await User.find({Email: Email, FlatNo: FlatNo});
    if(!user1){
        return next(new ErrorHandler("You are not an existing user. Please register",404));
    }
    
    res.status(200).json({
        success: true,
        message:"Link sent to mail to Update Password"
    })
});

// Update User Password

exports.updatePassword = catchAsyncErrors(async(req,res,next) => {
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