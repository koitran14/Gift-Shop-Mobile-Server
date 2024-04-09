const mongoose = require('mongoose'); // Erase if already required

const feedBackSchema = new mongoose.Schema({
    feedbackDate: {
        type: Date,
        required: true,
    },
    rating: {
        type: String,
        required: true,
    }
}) 

module.exports = mongoose.model('Feedback', feedBackSchema);

// main().catch(err => console.log(err));
// // Declare the Schema of the Mongo model
// async function main() {
//     var userSchema = new mongoose.Schema({
//         feedbackDate: {
//             type: Date,
//             required: true,
//         },
//         rating: {
//             type: String,
//             required: true,
//         },
//     });
    
//     //Export the model
//     module.exports = mongoose.model('Feedback', userSchema);
// }
// //Export the model
