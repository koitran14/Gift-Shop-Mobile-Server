const mongoose = require('mongoose');
const productSchema = require('../models/product.model').schema;
const propertySchema = require('../models/property.model').schema;

const productHasSchema = new mongoose.Schema({
    products:[productSchema],//many to many
    properties:[propertySchema],//many to many
});

module.exports = mongoose.model("ProductHas", productHasSchema);