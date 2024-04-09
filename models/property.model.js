const mongoose = require('mongoose'); // Erase if already required

main().catch(err => console.log(err));
// Declare the Schema of the Mongo model
async function main() {
    var userSchema = new mongoose.Schema({
        typeOfProperties:{
            type:String,
            required:true,
            unique:true,
            index:true,
        },
    });
    
    module.exports = mongoose.model('Property', userSchema);
}
//Export the model
