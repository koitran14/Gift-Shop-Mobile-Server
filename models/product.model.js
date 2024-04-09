const mongoose = require('mongoose'); // Erase if already required
const feedBackSchema = require('../models/feedback.model').schema;

const productSchema = new mongoose.Schema({
    productName: {
        type: String,
        required: true,
    },
    productDescription: {
        type: String,
        required: true,
    },
    quantitySold: {
        type: String,
        required: true,
    },
    feedBacks:[feedBackSchema],//one to many
});

const Product = mongoose.model('Product', productSchema)
module.exports = Product;

