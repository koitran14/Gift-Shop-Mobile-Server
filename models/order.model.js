const mongoose = require('mongoose'); // Erase if already required
const cartModel = require('./cart.model').schema;
const paymentSchema = require('./payment.model').schema;
const voucherSchema = require('./voucher.model').schema;

const orderSchema = new mongoose.Schema({
    orderDetails: {
        type: [cartModel],
        required: true,
    },
    orderDate: {
        type: Date,
        default: Date.now, 
    },
    paymentMethod: {
        type: paymentSchema,
        required: true,
    }, 
    voucher: {
        type: voucherSchema,
        required: false,
    },
})

module.exports = mongoose.model('Order', orderSchema);