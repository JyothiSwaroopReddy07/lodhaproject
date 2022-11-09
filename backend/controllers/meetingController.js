const Meeting = require("../models/MeetingModel"); 
const ErrorHandler = require("../utils/errorhandler"); 
const catchAsyncErrors = require("../middleware/catchAsyncErrors"); 


// Create Meeting 

exports.createMeeting = catchAsyncErrors(async(req, res, next) => {
    const meeting = await Meeting.create(req.body); 
    res.status(201).json({
        success: true, 
        meeting
    });
});

// get meeting
exports.getMeeting = catchAsyncErrors(async(req, res, next) => {
     const meeting1 = await Meeting.findById(req.params.id);
     if(!meeting1){
        return next(new ErrorHandler("Meeting not found", 404));
     }
     res.status(200).json({
        success: true, 
        meeting1
     });
});

// get all meetings

exports.getAllMeetings = catchAsyncErrors(async(req, res, next) => {
    const AllMeetings = await Meeting.find();
    res.status(200).json({
        success: true, 
        AllMeetings
    });
});

//update Meeting 

exports.updateMeeting = catchAsyncErrors(async(req,res,next)=> {
    let meeting = await Meeting.findById(req.params.id);
    if(!meeting){
        return next(new ErrorHandler("Meeting not found",404));
    }
    meeting = await Meeting.findByIdAndUpdate(req.params.id, req.body, {new: true, 
        runValidator: true, useFindAndModify: false})
 
    res.status(200).json({
        success: true,
        meeting
    })
});

// Delete Meeting

exports.deleteMeeting = catchAsyncErrors(async(req,res,next) => {
    const meeting = await Meeting.findById(req.params.id);
    if(!meeting) {
        return next(new ErrorHandler("Meeting not found",404));
    }
    await meeting.remove();
    res.status(200).json({
        success: true,
        message: "Meeting Deletion successful"
    })
});