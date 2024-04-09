const mongoose = require('mongoose'); // Erase if already required
const productSchema = require('../models/product.model').schema;

var storeSchema = new mongoose.Schema({
    storeName:{
        type:String,
        required:true,
        unique:true,
    },
    storeDescription:{
        type:String,
        required:true,
    },
    products:[productSchema],//one to many
});

const Store = mongoose.model('Store', storeSchema);
module.exports = Store;