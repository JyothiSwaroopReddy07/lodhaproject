const mongoose = require("mongoose")

const userSchema = mongoose.Schema({
    OwnerName:{
        type: String,
        required: [true, "Please Enter Owner's Name"],
        trim: true
    },
    RegisteredName: {
        type: String,
        required: [true, "Please Enter Property Registered Name"],
        trim: true
    },
    Email: {
        type:String,
        required: [true, "Please Enter Mail Id"]
    },
    Mobile: {
        type:String,
        required: [true, "Please Enter Phone Number"]
    },
    FlatNo: {
        type: String,
        required: [true, "Please Enter Flat Number"]
    },
    ParkingSlot: {
        type: String,
        required: [true, "Please Enter Parking Slot"]
    },
    Password:{
        type: String,
        required: [true, "Please Enter Password"]
    },
    Role: {
        type: String,
        required: [true, "Please Enter Role"]
    }, 
    Dues: {
        type: Number,
        required: [true],
        default: 0
    }
})

module.exports = mongoose.model("User", userSchema);