const mongoose = require('mongoose'); // Erase if already required

main().catch(err => console.log(err));
// Declare the Schema of the Mongo model
async function main() {
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
}
//Export the model
