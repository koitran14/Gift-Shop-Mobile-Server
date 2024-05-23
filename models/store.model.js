const mongoose = require('mongoose'); // Erase if already required
const User = require('./user.model').schema;
const productSchema = require('../models/product.model').schema;

var storeSchema = new mongoose.Schema({
    storeName:{
        type:String,
        required:true
    },
    storeDescription: {
        type:String,
        required:true,
    },
    storeAvatar: {
        type: String,
    },
    storeLocation: {
        type: String,
        required: true,
    },
    products: [productSchema],
    followers: [User]
});

module.exports = mongoose.model('Store', storeSchema);