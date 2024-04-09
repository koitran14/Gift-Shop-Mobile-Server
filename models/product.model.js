const mongoose = require('mongoose'); // Erase if already required
const feedBackSchema = require('../models/feedback.model').schema;
const propertySchema = require('../models/property.model').schema;

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
    properties:[propertySchema],//many to many
});

//Export the model
module.exports = mongoose.model('Product', productSchema);

