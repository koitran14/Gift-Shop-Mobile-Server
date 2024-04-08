const mongoose = require('mongoose'); // Erase if already required

main().catch(err => console.log(err));
// Declare the Schema of the Mongo model
async function main() {
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
