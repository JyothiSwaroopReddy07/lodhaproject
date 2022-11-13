const mongoose = require('mongoose'); 

const NotifySchema = mongoose.Schema({
    NotificationTitle: {
        type: String,
        required: [true, "Notification title not found!"],
    },
    NotificationDescription: {
       type: String,
       required: [true, "Notification "]
    },
    NotificationFiles: {
        data: Buffer,
        contentType: String
    }
})

module.exports = mongoose.model("Notifications", NotifySchema);