const mongoose = require('mongoose');
const productSchema = require('../models/product.model').schema;
const userSchema = require('../models/user.model').schema;

const selectSchema = new mongoose.Schema({
    users:[userSchema],//many to many
    products:[productSchema],//many to many
});

const Select = mongoose.model("Select", selectSchema);
module.exports = Select;