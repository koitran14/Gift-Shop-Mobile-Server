const mongoose = require('mongoose');

// NOTE: GỌI DIRECT NHƯ NÀY LUÔN. KHÔNG CẦN PHẢI THÊM BIẾN _id vì căn bản khi create Data nó đã auto tạo rồi.
// nên về schema không cần

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true, //required from user's input
    },
    email: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
});

module.exports = mongoose.model("User", userSchema);