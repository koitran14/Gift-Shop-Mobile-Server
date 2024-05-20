const Favorite = require('../models/favorite.model')

exports.getAll = async (req, res) => {
    try {
        const favorite = await Favorite.find();
        return res.status(200).json(favorite);
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
}