const mongoose = require('mongoose');
const orderSchema = require('../models/order.model').schema;
const feedBackSchema = require('../models/feedback.model').schema;
// NOTE: GỌI DIRECT NHƯ NÀY LUÔN. KHÔNG CẦN PHẢI THÊM BIẾN _id vì căn bản khi create Data nó đã auto tạo rồi.
// nên về schema không cần

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        require: true, //required from user's input
    },
    email: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    orders:[orderSchema],//one to many
    feedBacks:[feedBackSchema],//one to many
});

module.exports = mongoose.model("User", userSchema);