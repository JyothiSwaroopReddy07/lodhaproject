const mongoose = require("mongoose")

const complaintSchema = mongoose.Schema({
    Issue: {
        type: String,
        required: [true, "Please Enter Issue Type"],
        enum : ['NEW','STATUS'],
        default: ''
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
    user: {
        type: mongoose.Schema.ObjectId,
        ref: "User",
        required: true,
    }

})

module.exports = mongoose.model("Complaint", complaintSchema);