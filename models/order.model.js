const mongoose = require('mongoose'); // Erase if already required
const paymentSchema = require('../models/payment.model').schema;
const orderSchema = new mongoose.Schema({
    orderDate: {
        type: Date,
        required: true,
    },
    payment:{paymentSchema}, //one to one
})

module.exports = mongoose.model('Order', orderSchema);