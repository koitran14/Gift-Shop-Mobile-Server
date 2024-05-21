const mongoose = require('mongoose');
const productModel = require('./product.model').schema;

// Define the cart schema
const cartSchema = new mongoose.Schema({
  user: {
    type: String,
    required: true,
  },
  product: productModel,
  quantity: {
    type: Number,
    required: true,
    min: 1, // Quantity must be at least 1
  },
});

module.exports = mongoose.model('Cart', cartSchema);