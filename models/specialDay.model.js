const mongoose = require('mongoose'); // Erase if already required
const propertyModel = require('./property.model').schema;

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
    properties: [propertyModel]
});

module.exports = mongoose.model('SpecialDay', SpecialDaySchema);