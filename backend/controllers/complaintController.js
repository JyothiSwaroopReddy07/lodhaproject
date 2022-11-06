const Complaint = require("../models/complaintModel");

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
        return res.status(500).json({
            success: false,
            message: "Complaint not Found"
        })
    }
    complaint1 = await User.findByIdAndUpdate(req.params.id, req.body, {new: true, 
        runValidator: true, useFindAndModify: false})
 
    res.status(200).json({
        success: true,
        complaint1
    })
}