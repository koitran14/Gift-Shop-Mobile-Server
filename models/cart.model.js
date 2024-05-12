const mongoose = require('mongoose'); // Erase if already required
const userModel = require('./user.model').schema;
const productModel = require('./product.model').schema;

var cartSchema = new mongoose.Schema({
    user: {
        type: userModel,
        required: true,
    },
    product: {
        type: productModel,
        required: true,
    },
    quantity: {
        type: Number,
        required: true,
        default: 1,
        min: 1,
    }
});

module.exports = mongoose.model('Cart', cartSchema);
