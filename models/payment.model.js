const mongoose = require('mongoose'); // Erase if already required
const voucherSchema = require('../models/voucher.model').schema;
const paymentSchema = new mongoose.Schema({
    paymentTitle: {
        type: String,
        required: true,
    },
    vouchers:[voucherSchema],//one to many
});

const Payment = mongoose.model('Payment', paymentSchema);
module.exports = Payment;

