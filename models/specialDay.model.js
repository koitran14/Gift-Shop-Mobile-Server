const mongoose = require('mongoose'); // Erase if already required

var SpecialDaySchema = new mongoose.Schema({
    date: {
        type: Date,
        required: true,
        unique: true,
    },
    dateDescription: {
        type: String,
        required: true,
        unique: true,
    },
});

//Export the model
module.exports = mongoose.model('SpecialDay', SpecialDaySchema);

// main().catch(err => console.log(err));
// // Declare the Schema of the Mongo model
// async function main() {
//     var userSchema = new mongoose.Schema({
//         date: {
//             type: Date,
//             required: true,
//             unique: true,
//         },
//         dateDescription: {
//             type: String,
//             required: true,
//             unique: true,
//         },
//     });
    
//     //Export the model
//     module.exports = mongoose.model('SpecialDay', userSchema);
// }
// //Export the model
