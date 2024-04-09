const mongoose = require('mongoose'); // Erase if already required

var storeSchema = new mongoose.Schema({
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
module.exports = mongoose.model('Store', storeSchema);

// main().catch(err => console.log(err));
// // Declare the Schema of the Mongo model
// async function main() {
//     var userSchema = new mongoose.Schema({
//         storeName:{
//             type:String,
//             required:true,
//             unique:true,
//         },
//         storeDescription:{
//             type:String,
//             required:true,
//         },
//     });
    
//     //Export the model
//     module.exports = mongoose.model('Store', userSchema);
// }
// //Export the model
