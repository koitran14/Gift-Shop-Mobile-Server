const Favorite = require('../models/favorite.model')

exports.getAll = async (req, res) => {
    try {
        const favorite = await Favorite.find();
        return res.status(200).json(favorite);
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
}

exports.createFavorite = async (req, res) => {
    try {
        const favorite = await Favorite.create(req.body);
        return res.status(201).json(favorite);
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
}

exports.getFavoriteForEachUser = async (req, res) => {
    try {
        const user = req.query.user;
        if (!user) {
            return res.status(400).send("User not found")
        }
        const favorite = await Favorite.find({ user: user });
        return res.status(200).json(favorite);
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
}

exports.deleteFavorite = async (req, res) => {
    try {
        const favorite = await Favorite.findByIdAndDelete(req.params.id);
        if (!favorite) res.status(404).send("No item found")
        res.status(200).send();
    } catch (error) {
        res.status(500).send(error);
    }
}