const mongoose = require('mongoose'); // Erase if already required

main().catch(err => console.log(err));
// Declare the Schema of the Mongo model
async function main() {
    await mongoose.connect('mongodb+srv://danhkhoimt1:khoitran1403@cluster0.ahwot8k.mongodb.net/giftDB?retryWrites=true&w=majority&appName=Cluster0');
    var userSchema = new mongoose.Schema({
        productName: {
            type: String,
            required: true,
        },
        productDescription: {
            type: String,
            required: true,
        },
        quantitySold: {
            type: String,
            required: true,
        },
    });
    
    //Export the model
    module.exports = mongoose.model('Product', userSchema);
    
    
    
}
//Export the model
