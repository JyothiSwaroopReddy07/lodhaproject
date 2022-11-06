const Complaint = require("../models/complaintModel");
const ErrorHandler = require("../utils/errorhandler")

// Create Complaint
exports.createComplaint = async(req,res,next)=> {
    const complaint = await Complaint.create(req.body);

    res.status(201).json({
        success: true,
        complaint
    })
}

// Get All Complaints
exports.getAllComplaints = async(req,res) => {
    const AllComplaints = await Complaint.find()
    res.status(200).json({
        success: true,
        AllComplaints
    });
}

// Update Complaint
exports.updateComplaint = async(req,res,next)=> {
    let complaint1 = await Complaint.findById(req.params.id);
    if(!complaint1){
        return next(new ErrorHandler("Complaint not found",404));
    }
    complaint1 = await Complaint.findByIdAndUpdate(req.params.id, req.body, {new: true, 
        runValidator: true, useFindAndModify: false})
 
    res.status(200).json({
        success: true,
        complaint1
    })
}

// get User Complaints
exports.getUserComplaints = async(req,res,next) => {
    const complaints = await Complaint.find({user: req.params.id});
    res.status(201).json({
        success:true,
        complaints
    })
}

// Delete User Complaint
exports.deleteComplaint = async(req,res,next) => {
    const complaint1 = await Complaint.findById(req.params.id);
    if(!complaint1) {
        return next(new ErrorHandler("Complaint not found",404));
    }
    await complaint1.remove();
    res.status(200).json({
        success: true,
        message: "Complaint Deletion successful"
    })
}