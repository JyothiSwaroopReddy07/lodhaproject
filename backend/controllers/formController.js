const Meeting = require("../models/formModel"); 
const ErrorHandler = require("../utils/errorhandler"); 
const catchAsyncErrors = require("../middleware/catchAsyncErrors"); 


// Create Form

exports.createForm = catchAsyncErrors(async(req, res, next) => {
    const form = await Form.create(req.body); 
    res.status(201).json({
        success: true, 
        form
    });
});

// Get Form
exports.getForm = catchAsyncErrors(async(req, res, next) => {
     const form = await Form.findById(req.params.id);
     if(!form){
        return next(new ErrorHandler("Form not found", 404));
     }
     res.status(200).json({
        success: true, 
        form
     });
});

// get all forms

exports.getAllForms = catchAsyncErrors(async(req, res, next) => {
    const AllForms = await Form.find();
    res.status(200).json({
        success: true, 
        AllForms
    });
});

//update Form 

exports.updateForm = catchAsyncErrors(async(req,res,next)=> {
    let form = await Form.findById(req.params.id);
    if(!form){
        return next(new ErrorHandler("Form not found",404));
    }
    form = await Form.findByIdAndUpdate(req.params.id, req.body, {new: true, 
        runValidator: true, useFindAndModify: false})
 
    res.status(200).json({
        success: true,
        form
    })
});

// Delete Form

exports.deleteForm = catchAsyncErrors(async(req,res,next) => {
    const form = await Form.findById(req.params.id);
    if(!form) {
        return next(new ErrorHandler("Form not found",404));
    }
    await form.remove();
    res.status(200).json({
        success: true,
        message: "Form Deletion successful"
    })
});