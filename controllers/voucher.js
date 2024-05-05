const Voucher = require('../models/voucher.model')

exports.getAll = async (req, res) => {
    try {
        const voucher = await Voucher.find();
        return res.status(200).json(voucher);
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
}

exports.create = async (req, res) => {
    try {
        const voucher = await Voucher.create(req.body);
        return res.status(200).json(voucher);
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
}