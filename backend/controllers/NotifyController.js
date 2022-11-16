const Notification = require("../models/NotifyModel");
const ErrorHandler = require("../utils/errorhandler");
const catchAsyncErrors = require("../middleware/catchAsyncErrors");




// Create Notification
exports.createNotification = catchAsyncErrors(async(req,res,next)=> {
    
    const {Title, Description} = req.body;
    const notify1 = await Notification.find({Title: Title, Description: Description})
    if(notify1 && Object.keys(notify1).length){
        return next(new ErrorHandler("Notification Already Exists",404));
    }
    const notification = await Notification.create(req.body);
    res.status(201).json({
        success: true,
        notification
    })
});

// Get All Notifications
exports.getAllNotifications = catchAsyncErrors(async(req,res) => {
    const notifications = await Notification.find();
    res.status(200).json({
        success: true,
        notifications
    });
});