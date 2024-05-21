const Cart = require('../models/cart.model');

// Get all cart items
exports.getAll = async (req, res) => {
  try {
    const carts = await Cart.find();
    return res.status(200).json(carts);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: error.message });
  }
};

// Add an item to the cart
exports.addToCart = async (req, res) => {
  try {
    const cartItem = new Cart(req.body); // Create a new instance of the Cart model
    const savedCartItem = await cartItem.save();
    res.status(201).json(savedCartItem);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to add item to cart' });
  }
};

// Remove an item from the cart
exports.removeFromCart = async (req, res) => {
  try {
    const removeCartItem = await Cart.findByIdAndDelete(req.body.id);
    res.json(removeCartItem);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to remove item from cart' });
  }
};

// Update the quantity of an item in the cart
exports.updateCartItemQuantity = async (req, res) => {
  try {
    const { id, quantity } = req.body;
    const updateCartItem = await Cart.findByIdAndUpdate(id, { quantity });
    res.json(updateCartItem);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to update cart item quantity' });
  }
};
