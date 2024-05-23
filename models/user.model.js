const mongoose = require('mongoose');

// NOTE: GỌI DIRECT NHƯ NÀY LUÔN. KHÔNG CẦN PHẢI THÊM BIẾN _id vì căn bản khi create Data nó đã auto tạo rồi.
// nên về schema không cần

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        require: true, 
    },
    email: {
        type: String,
    },
    password: {
        type: String,
        required: true,
    },
    token: {
        type: String
    }
});

module.exports = mongoose.model("User", userSchema);