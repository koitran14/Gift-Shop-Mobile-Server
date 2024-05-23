const Order = require('../models/order.model')

exports.getAll = async (req, res) => {
    try {
        const orders = await Order.find();
        return res.status(200).json(orders);
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
}

exports.getAllByUserId = async(req, res) => {
    try {
        const orders = await Order.find({ 'user._id': req.params.userId })
            .populate('user')
            .populate('paymentMethod')
            .populate('voucher')
            .populate('products')
            .exec();

        return res.status(200).json(orders);
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
};


exports.create = async (req, res) => {
    try {
        const orders = await Order.create(req.body);
        return res.status(200).json(orders);
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
}