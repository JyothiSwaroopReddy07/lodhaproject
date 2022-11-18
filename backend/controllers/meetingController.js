const Meeting = require("../models/MeetingModel");
const ErrorHandler = require("../utils/errorhandler");
const catchAsyncErrors = require("../middleware/catchAsyncErrors");




// Create Meeting
exports.createMeeting = catchAsyncErrors(async(req,res,next)=> {
    
    const {Title, Description, Link, Host, Date, Time} = req.body;
    const meeting1 = await Meeting.find({Title: Title, Description: Description, Link: Link, Host: Host, Date: Date, Time: Time})
    if(meeting1 && Object.keys(meeting1).length){
        return next(new ErrorHandler("Meeting Already Exists",404));
    }
    const meeting = await Meeting.create(req.body);
    res.status(201).json({
        success: true,
        meeting
    })
});

// Get All Meetings
exports.getAllMeetings = catchAsyncErrors(async(req,res) => {
    const meetings = await Meeting.find();
    res.status(200).json({
        success: true,
        meetings
    });
});
