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

const Feedback = mongoose.model('Feedback', feedBackSchema);
module.exports = Feedback;