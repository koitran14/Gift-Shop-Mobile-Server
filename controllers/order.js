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
        const orders = await Order.find({ 'orderDetails.user._id': req.params.userId }).sort({ orderDate: -1 })
        return res.status(200).json(orders);
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
};

exports.getTotalQuantitySold = async(req, res) => {
    try {
        const { productId } = req.params;

        let totalQuantitySold = 0;
    
        const orders = await Order.find({
            'orderDetails.product._id': productId
        });

        orders.forEach(order => {
            order.orderDetails.forEach(detail => {
                if (detail.product._id.toString() === productId) {
                    totalQuantitySold += detail.quantity;
                }
            });
        });

        return res.status(200).json({total: totalQuantitySold}); 
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
}


exports.create = async (req, res) => {
    try {
        const orders = await Order.create(req.body);
        return res.status(200).json(orders);
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
}