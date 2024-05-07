const mongoose = require('mongoose'); // Erase if already required
const userModel = require('./user.model').schema;
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
    products:[productSchema], //one to many
    followers: [userModel],
});

module.exports = mongoose.model('Store', storeSchema);