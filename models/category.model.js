const mongoose = require('mongoose'); // Erase if already required

// Declare the Schema of the Mongo model
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

//Export the model
module.exports = mongoose.model('Category', userSchema);