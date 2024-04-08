const Payment = require('../models/payment.model')

exports.getAll = async (req, res) => {
    try {
        const payments = await Payment.find();
        return res.status(200).json(payments);
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
}