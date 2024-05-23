const mongoose = require('mongoose'); // Erase if already required

const categorySchema = new mongoose.Schema({
    categoryName: {
        type: String,
        required: true
    },
    categoryDescription: {
        type: String,
        required: true,
    },
})

module.exports = mongoose.model('Category', categorySchema);
