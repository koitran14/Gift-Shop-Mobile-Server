const mongoose = require('mongoose'); // Erase if already required

// Declare the Schema of the Mongo model
var userSchema = new mongoose.Schema({
    voucherTitle:{
        type:String,
        required:true,
        unique:true,
    },
    benifit:{
        type:String,
        required:true,
    },
    condition:{
        type:String,
        required:true,
    },
});

//Export the model
module.exports = mongoose.model('Voucher', userSchema);