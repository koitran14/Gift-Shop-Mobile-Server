const mongoose = require('mongoose'); // Erase if already required
const paymentSchema = require('../models/payment.model').schema;
const voucherSchema = require('./voucher.model').schema;
const productSchema = require('./product.model').schema;

const orderSchema = new mongoose.Schema({
    orderDate: {
        type: Date,
        required: true,
    },
    paymentMethod: {
        type: paymentSchema,
        required: true,
    }, //one to one,
    voucher: voucherSchema,
    products: [productSchema]
})

module.exports = mongoose.model('Order', orderSchema);