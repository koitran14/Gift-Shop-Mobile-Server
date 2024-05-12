const mongoose = require('mongoose'); // Erase if already required
const User = require('./user.model').schema;
const productSchema = require('../models/product.model').schema;

var storeSchema = new mongoose.Schema({
    storeName:{
        type:String,
        required:true,
        unique:true,
    },
    storeDescription: {
        type:String,
        required:true,
    },
    products:{
        type:[productSchema],
    }, //one to many
    followers: {
        type:[User],
    }
});

module.exports = mongoose.model('Store', storeSchema);