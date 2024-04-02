const mongoose = require('mongoose');
const bcrypt = require('bcrypt')

// NOTE: GỌI DIRECT NHƯ NÀY LUÔN. KHÔNG CẦN PHẢI THÊM BIẾN _id vì căn bản khi create Data nó đã auto tạo rồi.
// nên về schema không cần

const userSchema = mongoose.Schema({
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
    }
 
});

userSchema.pre('save', async function (next){
    if(!this.isModified('password')){
        next()
    }
    const salt = await bcrypt.genSaltSync(10)
    this.password = await bcrypt.hashSync(this.password,salt)
})

module.exports = mongoose.model("User", userSchema);