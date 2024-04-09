const mongoose = require('mongoose'); // Erase if already required

main().catch(err => console.log(err));
// Declare the Schema of the Mongo model
async function main() {
    await mongoose.connect('mongodb+srv://danhkhoimt1:khoitran1403@cluster0.ahwot8k.mongodb.net/giftDB?retryWrites=true&w=majority&appName=Cluster0');
    var userSchema = new mongoose.Schema({
        categoryName:{
        type:String,
        required:true,
        unique:true,
    },
    categoryDescription:{
        type:String,
        required:true,
        unique:true,
    },
    
});
    module.exports = mongoose.model('Category', userSchema);
}
//Export the model
