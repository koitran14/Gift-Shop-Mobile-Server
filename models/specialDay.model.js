const mongoose = require('mongoose'); // Erase if already required
const propertyModel = require('./property.model').schema;

var SpecialDaySchema = new mongoose.Schema({
    date: {
        type: String,
        required: true,
    },
    dateName: {
        type: String,
        required: true,
    },
    dateDescription: {
        type: String,
        required: true,
    },
    dateThumbnail: {
        type: String,
        required: true,
    },
    properties: [propertyModel]
});

module.exports = mongoose.model('SpecialDay', SpecialDaySchema);