const mongoose = require('mongoose'); // Erase if already required
const feedBackSchema = require('../models/feedback.model').schema;
const categorySchema = require('./category.model').schema;
const propertySchema = require('./property.model').schema;

const productSchema = new mongoose.Schema({
    productName: {
        type: String,
        required: true,
    },
    productDescription: {
        type: String,
        required: true,
    },
    productImage: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },
    category: {
        type: categorySchema,
        required: true,
    },
    feedBacks: [feedBackSchema],//one to many
    properties: [propertySchema],
});

module.exports = mongoose.model('Product', productSchema);

