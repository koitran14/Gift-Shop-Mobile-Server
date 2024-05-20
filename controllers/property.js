const Property = require('../models/property.model')

exports.getAll = async (req, res) => {
    try {
        const property = await Property.find();
        return res.status(200).json(property);
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
}

exports.create = async (req, res) => {
    try {
        const property = await Property.create(req.body);
        return res.status(200).json(property);
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
}