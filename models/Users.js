const mongoose = require('mongoose');


const userSchema = new mongoose.Schema({
    firstname: {
        type: String,
        require: true,
        max: 60
    },
    lastname: {
        type: String,
        require: true,
        max: 60
    },
    email: {
        type: String,
        required: true,
        max: 60,
        unique: true
    },
    password: {
        type: String,
        requied: true,
        max: 20
    },
    mobileNo: {
        type: String,
        requied: true,
        max: 20
    },
    profilePicture: {
        type: String,
        required: false

    },
    occupation: {
        type: String,
        required: false
    },
    city: {
        type: String,
        require: false
    }
}, { timestamps: true }
)

module.exports = mongoose.model('User', userSchema)