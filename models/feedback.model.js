const mongoose = require('mongoose'); // Erase if already required

const feedBackSchema = new mongoose.Schema({
    feedbackDate: {
        type: Date,
        required: true,
    },
    rating: {
        type: String,
        required: true,
    }
}) 

module.exports = mongoose.model('Feedback', feedBackSchema);