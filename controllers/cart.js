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

exports.getAllByUserID = async (req, res) => {
  const userId = req.params.userId;

  try {
    const carts = await Cart.find({ 'user._id': userId }).populate('product');
    return res.status(200).json(carts);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: error.message });
  }
};

exports.addToCart = async (req, res) => {
    try {
        const userId = req.body.user._id;
        const productId = req.body.product._id;

        let cartItem = await Cart.findOne({ 'user._id': userId, 'product._id': productId });

        if (cartItem) {
            cartItem.quantity++;
            await cartItem.save();
            res.status(200).json({ message: 'Quantity updated successfully', cartItem });
        } else {
          for (const prop of req.body.product.properties) {
            const existingItem = await Cart.findOne({ 'product.properties.typeOfProperties': prop.typeOfProperties });
            if (existingItem) {
                return res.status(400).json({ error: `Duplicate key error: properties.typeOfProperties must be unique (${prop.typeOfProperties})` });
            }
          }
            cartItem = Cart.create(req.body);
            res.status(200).json({ message: 'Item added to cart successfully', cartItem });
        }
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Failed to add item to cart' });
    }
};

exports.removeFromCart = async (req, res) => {
  try {
    await Cart.findByIdAndDelete(req.params.id);
    res.json({ message: 'Item removed from cart successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to remove item from cart' });
  }
};

exports.updateQuantity = async (req, res) => {
  const { userId, productId } = req.params;
  const { quantity } = req.body;

  if (!Number.isInteger(quantity) || quantity < 1) {
    return res.status(400).json({ error: "Quantity must be an integer greater than 0" });
  }

  try {
    const cartItem = await Cart.findOneAndUpdate(
      { 'user._id': userId, 'product._id': productId },
      { $set: { quantity: quantity } },
      { new: true } // Return the updated document
    );

    if (!cartItem) {
      return res.status(404).json({ error: "Cart item not found" });
    }

    return res.status(200).json(cartItem);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: error.message });
  }
};

