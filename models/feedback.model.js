const mongoose = require('mongoose'); // Erase if already required
const userSchema = require('./user.model').schema; 

const feedBackSchema = new mongoose.Schema({
    user: userSchema,
    feedbackDate: {
        type: Date,
        required: true,
    },
    rating: {
        type: String,
        required: true,
    },
    comment: {
        type: String,
        required: true,
    },
}) 

module.exports = mongoose.model('Feedback', feedBackSchema);