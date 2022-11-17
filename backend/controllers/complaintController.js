const {Complaint} = require("../models/complaintModel");
const ErrorHandler = require("../utils/errorhandler");
const catchAsyncErrors = require("../middleware/catchAsyncErrors");
const UserApiFeatures = require("../utils/apifeatures");



// Create Complaint
exports.createComplaint = catchAsyncErrors(async(req,res,next)=> {
    
    const {Issue, Description, FlatNo} = req.body;
    const complaint1 = await Complaint.find({Issue: Issue, Description: Description, FlatNo: FlatNo})
    if(complaint1 && Object.keys(complaint1).length){
        return next(new ErrorHandler("Complaint Already Exists",404));
    }
    const complaint = await Complaint.create(req.body);

    res.status(201).json({
        success: true,
        complaint
    })
});

// Get All Complaints
exports.getAllComplaints = catchAsyncErrors(async(req,res) => {
    const data = await Complaint.find()
    const complaints = data.map((ele) =>{
        return (
            {
                FlatNo: ele.FlatNo,
                Issue: ele.Issue,
                Description: ele.Description,
                Time: ele.Time,
                Status: ele.Status
            }
        );
    })
    
    res.status(200).json({
        success: true,
        complaints
    });
});

// Update Complaint
exports.updateComplaint = catchAsyncErrors(async(req,res,next)=> {

    let complaint1 = await Complaint.find({FlatNo: req.query.complaint.FlatNo, Issue: req.query.complaint.Issue, Description: req.query.complaint.Description});
    if(!complaint1){
        return next(new ErrorHandler("complaint not found",404));
    }
    console.log("query", req.query);
    console.log("done");
    complaint1[0].Status = req.query.complaint.Status;

    complaint1[0].save();
    complaint1 = await Complaint.find({FlatNo: req.query.complaint.FlatNo, Issue: req.query.complaint.Issue, Description: req.query.complaint.Description});
    
    console.log(complaint1[0]);
    res.status(200).json({
        success: true,
        message: "SuccessFully updated"
    })
});

// get User Complaints
exports.getUserComplaints = catchAsyncErrors(async(req,res,next) => {
   
    const complaints = await Complaint.find({FlatNo: req.query.FlatNo});
    res.status(200).json({
        success:true,
        complaints
    })
});

// Delete User Complaint
exports.deleteComplaint = catchAsyncErrors(async(req,res,next) => {
    const complaint1 = await Complaint.find({FlatNo: req.query.FlatNo, Issue: req.query.Issue, Description: req.query.Description});
    if(!complaint1) {
        return next(new ErrorHandler("complaint not found",404));
    }
    await complaint1[0].remove();
    res.status(200).json({
        success: true,
        message: "Complaint Deletion successful"
    })
});