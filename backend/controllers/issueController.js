const Issue = require("../models/issueModel");
const ErrorHandler = require("../utils/errorhandler");
const catchAsyncErrors = require("../middleware/catchAsyncErrors");

// Create User
exports.createIssue = catchAsyncErrors(async(req,res,next)=> {
    console.log(req.body);
    const { issue } = req.body;
    const issue1 = await Issue.find();
    if(issue1.indexOf(Issue) >= 0){
        return next(new ErrorHandler("Issue Already Exists",404));
    }

    const i = await Issue.create({Name: issue});

    res.status(201).json({
        success: true
    })
});

// Get All Issues
exports.getAllIssues = catchAsyncErrors(async(req,res,next)=> {
    const issues = await Issue.find();

    res.status(201).json({
        success: true,
        issues
    })
});

