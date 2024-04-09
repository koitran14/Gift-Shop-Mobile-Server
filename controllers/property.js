const Property = require('../models/product.model')

exports.getAll = async (req, res) => {
    try {
        const property = await Property.find();
        return res.status(200).json(property);
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
}