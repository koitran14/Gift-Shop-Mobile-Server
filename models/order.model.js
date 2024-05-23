const mongoose = require('mongoose'); // Erase if already required
const paymentSchema = require('./payment.model').schema;
const voucherSchema = require('./voucher.model').schema;
const productSchema = require('./product.model').schema;
const userSchema = require('./user.model').schema;

const orderSchema = new mongoose.Schema({
    user: {
        type: userSchema,
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
    voucher: voucherSchema,
    products: [productSchema]
})

module.exports = mongoose.model('Order', orderSchema);