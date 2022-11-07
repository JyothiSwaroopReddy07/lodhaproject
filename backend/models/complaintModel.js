const mongoose = require("mongoose")

const complaint_types = ['Plumbing','Carpentery','Mosquitoes','Hygenie','Gardening','Electrician','Other'];

const complaintSchema = mongoose.Schema({
    Issue: {
        type: String,
        required: [true, "Please Enter Issue Type"],
        enum : complaint_types,
        default: 'Other',
        required: true
    },
    Description: {
        type: String,
        required: [true, "Please Enter Description of Complaint"]
    },
    Status: {
        type: Number,
        required: true,
        default: 0
    },
    Time: {
        type: Date,
        default: Date.now,
    },
    FlatNo: {
        type: String,
        required: [true,"Please Enter Flat Number"]
    }

})

module.exports = mongoose.model("Complaint", complaintSchema);

module.exports = complaint_types;