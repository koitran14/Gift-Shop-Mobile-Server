const mongoose = require('mongoose'); // Erase if already required
const paymentSchema = require('./payment.model').schema;
const voucherSchema = require('./voucher.model').schema;
const userModel = require('./user.model').schema;
const productSchema = require('./product.model').schema;

const orderSchema = new mongoose.Schema({
    user: {
        type: userModel,
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
        type: voucherSchema
    },
    products: {
        type: productSchema,
        required: true,
    },
    quantity: {
        type: Number,
        required: true,
        min: 1,
    }
})

module.exports = mongoose.model('Order', orderSchema);