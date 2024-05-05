const Include = require('../models/include.model');

exports.getAll = async (req, res) => {
    try {
        const includes = await Include.find();
        return res.status(200).json(includes);
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
}

exports.create = async(req, res) => {
    try {
        const includes = await Include.create(req.body);
        return res.status(200).json(includes);
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
}