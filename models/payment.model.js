const mongoose = require('mongoose'); // Erase if already required

main().catch(err => console.log(err));
// Declare the Schema of the Mongo model
async function main() {
    var userSchema = new mongoose.Schema({
        paymentTitle: {
            type: String,
            required: true,
        }
    });
    
    module.exports = mongoose.model('Payment', userSchema);
}
//Export the model
