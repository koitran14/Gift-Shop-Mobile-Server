const Following = require('../models/following.model');

exports.getAll = async (req, res) => {
    try {
        const followings = await Following.find();
        return res.status(200).json(followings);
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
}