const mongoose = require('mongoose');


const meetingSchema = mongoose.Schema({
    MeetingTitle: {
       type: String,
       required: [true, "Enter the meeting title "]

    }, 
    MeetingDesc : {
        type: String, 
        required: [true, "Enter the meeting description"]
    },
    MeetingLink: {
      type: String, 
      required: [true, "Enter the meeting Link"]
    },
    MeetingDate: {
        type: Date, 
        required: [true, "Enter the Meeting Date"],
    }, 
    Host : {
        type: String, 
        required: [true, "Enter the Host Name "],
        default : ''
    },
    Time:{
        type: String, 
        required: [true, "Enter the Meeting time"]
    }
})

module.exports = mongoose.model("Meeting", meetingSchema);
