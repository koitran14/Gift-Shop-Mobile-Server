const mongoose = require('mongoose');

// Define the cart schema
const cartSchema = new mongoose.Schema({
  user: {
    type: String,
    required: true,
  },
  product: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  feedback: {
    type: String,
  },
  properties: [String],
  quantity: {
    type: Number,
    required: true,
    min: 1, // Quantity must be at least 1
  },
});

// Create the Cart model from the schema
const Cart = mongoose.model('Cart', cartSchema);

module.exports = Cart;
