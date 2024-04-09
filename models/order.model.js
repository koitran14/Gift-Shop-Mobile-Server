const mongoose = require('mongoose'); // Erase if already required
const paymentSchema = require('../models/payment.model').schema;
const orderSchema = new mongoose.Schema({
    orderDate: {
        type: Date,
        required: true,
    },
    payment:{paymentSchema}, //one to one
})

const Order = mongoose.model('Order', orderSchema);
module.exports = Order;