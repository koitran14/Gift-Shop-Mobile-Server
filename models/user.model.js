const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    username: {
        type: String,
        require: true, //required from user's input
    },
    email: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    }
 
})

module.exports = mongoose.model("User", userSchema);