const mongoose = require('mongoose');
const productModel = require('./product.model').schema;
const User = require('./user.model').schema
// Define the cart schema
const cartSchema = new mongoose.Schema({
    user: User,
    product: productModel,
    quantity: {
      type: Number,
      min: 1, // Quantity must be at least 1
      default: 1,
    },
});

// Create the Cart model from the schema
module.exports = mongoose.model('Cart', cartSchema);