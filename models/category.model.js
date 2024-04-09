const mongoose = require('mongoose'); // Erase if already required
const productSchema = require('../models/product.model').schema;

const categorySchema = new mongoose.Schema({
    categoryName: {
        type: String,
        required: true,
        unique: true,
    },
    categoryDescription: {
        type: String,
        required: true,
        unique: true,
    },
    products:[productSchema],//one to many
})
const Category = mongoose.model('Category', categorySchema)
module.exports = Category;
