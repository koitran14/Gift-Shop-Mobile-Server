const mongoose = require('mongoose'); // Erase if already required

var voucherSchema = new mongoose.Schema({
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

const Voucher = mongoose.model('Voucher', voucherSchema);
module.exports = Voucher;
