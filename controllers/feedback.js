const Feedback = require('../models/feedback.model')

exports.getAll = async (req, res) => {
    try {
        const feedbacks = await Feedback.find();
        return res.status(200).json(feedbacks);
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
}

exports.create = async (req, res) => {
    try {
        const newfb = await Feedback.create(req.body);
        return res.status(200).json(newfb);
    } catch (error) {
        return res.status(500).json({ error: error.message })       
    }
}