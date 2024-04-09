const ProductHas = require('../models/productHas.model');

exports.getAll = async (req, res) => {
    try {
        const productHas = await ProductHas.find();
        return res.status(200).json(productHas);
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
}