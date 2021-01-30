const mongoose = require("mongoose")

const eventSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        trim: true
    },
    allDay: {
        type: Boolean,
        required: true
    },
    start: {
        type: String,
        required: true
    },
    end: {
        type: String
    },
    url: {
        type: String,
        trim: true
    },
    backgroundColor: {
        type: String
    },
    borderColor: {
        type: String
    },
    textColor: {
        type: String
    }
})
        
module.exports = mongoose.model("Event", eventSchema)
