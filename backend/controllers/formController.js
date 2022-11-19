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
