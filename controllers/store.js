const Store = require('../models/store.model')

exports.getAll = async (req, res) => {
    try {
        const store = await Store.find();
        return res.status(200).json(store);
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
}

exports.create = async (req, res) => {
    try {
        const store = await Store.create(req.body);
        return res.status(200).json(store);
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
}

