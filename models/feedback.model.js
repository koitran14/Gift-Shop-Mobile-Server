const mongoose = require('mongoose'); // Erase if already required
const userSchema = require('./user.model').schema; 

const feedBackSchema = new mongoose.Schema({
    user: {
        type: userSchema,
        required: true,
    },
    feedbackDate: {
        type: Date,
        default: Date.now, 
    },
    rating: {
        type: Number,
        min: 1,
        max: 5,
        required: true,
    },
    comment: {
        type: String,
        required: true,
    },
}) 

module.exports = mongoose.model('Feedback', feedBackSchema);