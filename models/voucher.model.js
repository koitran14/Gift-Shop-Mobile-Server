const mongoose = require('mongoose'); // Erase if already required

var voucherSchema = new mongoose.Schema({
    voucherTitle:{
        type:String,
        required:true,
    },
    discount:{
        type: Number,
        required:true,
    },
    condition:{
        type:String,
        required:true,
    },
});

module.exports = mongoose.model('Voucher', voucherSchema);
