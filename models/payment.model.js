const mongoose = require('mongoose'); // Erase if already required

const paymentSchema = new mongoose.Schema({
    paymentTitle: {
        type: String,
        required: true,
    },
});

module.exports = mongoose.model('Payment', paymentSchema);

