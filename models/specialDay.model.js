const mongoose = require('mongoose'); // Erase if already required
const propertySchema = require('../models/property.model').schema;

var SpecialDaySchema = new mongoose.Schema({
    date: {
        type: Date,
        required: true,
        unique: true,
    },
    dateDescription: {
        type: String,
        required: true,
        unique: true,
    },
    properties:[propertySchema],//many to many
});

//Export the model
module.exports = mongoose.model('SpecialDay', SpecialDaySchema);