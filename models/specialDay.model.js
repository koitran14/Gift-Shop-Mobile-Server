const mongoose = require('mongoose'); // Erase if already required

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
});

const SpecialDay = mongoose.model('SpecialDay', SpecialDaySchema);
module.exports = SpecialDay;