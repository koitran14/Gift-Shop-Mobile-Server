const Cart = require('../models/cart.model')

exports.getAll = async (req, res) => {
    try {
        const cart = await Cart.find();
        return res.status(200).json(cart);
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
}

exports.create = async (req, res) => {
    try {
        const cart = await Cart.create(req.body);
        return res.status(200).json(cart);
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
}