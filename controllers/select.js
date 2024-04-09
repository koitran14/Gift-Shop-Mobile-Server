const Select = require('../models/select.model');

exports.getAll = async (req, res) => {
    try {
        const selects = await Select.find();
        return res.status(200).json(selects);
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
}