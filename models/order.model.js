const mongoose = require('mongoose'); // Erase if already required

main().catch(err => console.log(err));
// Declare the Schema of the Mongo model
async function main() {
    var userSchema = new mongoose.Schema({
        orderDate: {
            type: Date,
            required: true,
        },
    });
    
    //Export the model
    module.exports = mongoose.model('Order', userSchema);
}
//Export the model
