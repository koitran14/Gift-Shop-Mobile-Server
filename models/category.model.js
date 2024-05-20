const mongoose = require('mongoose'); // Erase if already required

const categorySchema = new mongoose.Schema({
    categoryName: {
        type: String,
        required: true,
        unique: true,
    },
    categoryDescription: {
        type: String,
        required: true,
        unique: true,
    },
})

module.exports = mongoose.model('Category', categorySchema);
