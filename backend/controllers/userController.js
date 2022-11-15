const User = require("../models/UserModel");
const ErrorHandler = require("../utils/errorhandler");
const catchAsyncErrors = require("../middleware/catchAsyncErrors");
const UserApiFeatures = require("../utils/apifeatures");

// Create User
exports.createUser = catchAsyncErrors(async(req,res,next)=> {
    const { FlatNo } = req.body;
    const user1 = await User.find({FlatNo: FlatNo});
    if(user1 && Object.keys(user1).length){
        return next(new ErrorHandler("User Already Exists",404));
    }
    const {Password, OwnerName,RegisteredName,Block, Mobile,ParkingSlot,Email } = req.body;
    const user = await User.create({
        FlatNo: FlatNo,
        Email: Email,
        Password: Password,
        OwnerName: OwnerName,
        RegisteredName: RegisteredName,
        Block: Block,
        Mobile: Mobile,
        ParkingSlot: ParkingSlot
    });

    res.status(201).json({
        success: true,
       user 
    })
});

// login User
exports.loginUser = catchAsyncErrors(async(req,res,next) => {
    console.log(req.body);
    const {FlatNo, Password} = req.body;
    const user = await User.find({FlatNo: FlatNo, Password: Password})
    if(!user && Object.keys(user).length){
        return next(new ErrorHandler("User does not exists",404));
    }
    res.status(200).json({
        success: true,
        user
    });
})


// Get Single User
exports.getUser = catchAsyncErrors(async(req,res,next) => {
    const {FlatNo} = req.body;
    const user1 = await User.find({FlatNo: FlatNo})
    if(user1 && Object.keys(user1).length){
        return next(new ErrorHandler("User does not exists",404));
    }
    res.status(200).json({
        success: true,
        user1
    });
});

// Get All users
exports.getAllusers = catchAsyncErrors(async(req,res) => {
    console.log(req);
    if(req.query !== null || req.query!== undefined || req.query!== "")
    {
        const userapiFeature = new UserApiFeatures(User.find(),req.query).search();
        const user_query = await userapiFeature.query;
        res.status(200).json({
            success: true,
            user_query
        });
    }else{
        const UserData = await User.find()
        res.status(200).json({
            success: true,
            UserData
        });
    }
    
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