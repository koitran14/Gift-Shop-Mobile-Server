const mongoose = require('mongoose'); // Erase if already required

// Declare the Schema of the Mongo model
var userSchema = new mongoose.Schema({
    storeName:{
        type:String,
        required:true,
        unique:true,
    },
    storeDescription:{
        type:String,
        required:true,
    },
});

//Export the model
module.exports = mongoose.model('Store', userSchema);