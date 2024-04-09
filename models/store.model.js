const mongoose = require('mongoose'); // Erase if already required
const productSchema = require('../models/product.model').schema;
const userSchema = require('../models/user.model').schema;

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
    users:[userSchema],//many to many
});

//Export the model
module.exports = mongoose.model('Store', storeSchema);

