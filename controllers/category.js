const Category = require('../models/category.model')

exports.getAll = async (req, res) => {
    try {
        const categories = await Category.find();
        return res.status(200).json(categories);
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
}

exports.create = async (req, res) => {
    try {
        const new_cate = await Category.create(req.body);
        return res.status(200).json(new_cate);
    } catch (error) {
        return res.status(500).json({ error: error.message});
    }
}