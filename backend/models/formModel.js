const mongoose = require("mongoose"); 

const formSchema = mongoose.Schema({
    FormTitle: {
     type: String, 
     required: [true, "Enter the form title"]
    },
    FormDesc : {
      type: String, 
      required: [true, "Enter the form Desc"]
    },
    FormLink: {
        type: String,
        required: [true, "Enter the Form Link"]
    }
})

module.exports = mongoose.model("Form", formSchema);