const SpecialDay = require('../models/specialDay.model')

exports.getAll = async (req, res) => {
    try {
        const specialDay = await SpecialDay.find();
        return res.status(200).json(specialDay);
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
}

exports.create = async (req, res) => {
    try {
        const specialDay = await SpecialDay.create(req.body);
        return res.status(200).json(specialDay);
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
}