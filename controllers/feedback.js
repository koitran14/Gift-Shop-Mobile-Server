const Feedback = require('../models/feedback.model')

exports.getAll = async (req, res) => {
    try {
        const feedbacks = await Feedback.find();
        return res.status(200).json(feedbacks);
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
}