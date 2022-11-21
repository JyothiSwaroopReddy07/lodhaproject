const Form = require("../models/FormModel");
const ErrorHandler = require("../utils/errorhandler");
const catchAsyncErrors = require("../middleware/catchAsyncErrors");





// Create form
exports.createForm = catchAsyncErrors(async (req, res, next) => {

    const { Title, Description, Link } = req.body;
    const title1 = await Form.find({ Title: Title, Description: Description, Link: Link })
    if (title1 && Object.keys(title1).length) {
        res.status(201).json({
            success: false,
            message: "Form already exists"
        });
    }
    else {
        const form = await Form.create(req.body);
        res.status(201).json({
            success: true,
            form
        });
    }
});

// Get All forms
exports.getAllForms = catchAsyncErrors(async (req, res) => {
    const forms = await Form.find();
    res.status(200).json({
        success: true,
        forms
    });
});

//update form

exports.updateForm = catchAsyncErrors(async(req,res,next)=> {
    
    let form1 = await Form.findById(req.query._id);
    if(!form1){
        return next(new ErrorHandler("complaint not found",404));
    }
    form1.Description = req.query.Description;
    form1.Title = req.query.Title;
    form1.Link = req.query.Link;
    form1.save();
    form1 = await Form.find({Title: req.query.Title, Description: req.query.Description, Link:req.query.Link });
    res.status(201).json({
        success: true,
        message: "SuccessFully updated"
    })
});


// delete form details 

exports.deleteForm = catchAsyncErrors(async (req, res) => {
    const form1 = await Form.findById(req.query._id);
    if (!form1) {
        res.status(201).json({
            success: false,
            message: "form Does not exists"
        })
    }
    else {
        await form1.remove();
        res.status(201).json({
            success: true,
            message: "form Deletion successful"
        })
    }
});