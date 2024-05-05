const mongoose = require('mongoose');
const SpecialDaySchema = require('../models/specialDay.model').schema;
const propertySchema = require('../models/property.model').schema;

const includeSchema = new mongoose.Schema({
    specialDays:[SpecialDaySchema],//many to many
    properties:[propertySchema],//many to many
});

module.exports = mongoose.model("Include", includeSchema);