const mongoose = require('mongoose'); // Erase if already required

// Declare the Schema of the Mongo model
var userSchema = new mongoose.Schema({
    feedbackDate: {
        type: Date,
        required: true,
    },
    rating: {
        type: String,
        required: true,
    },
});

//Export the model
module.exports = mongoose.model('Feedback', userSchema);