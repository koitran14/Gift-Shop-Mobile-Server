const mongoose = require('mongoose'); // Erase if already required

// Declare the Schema of the Mongo model
var userSchema = new mongoose.Schema({
    typeOfProperties:{
        type:String,
        required:true,
        unique:true,
        index:true,
    },
});

//Export the model
module.exports = mongoose.model('Property', userSchema);