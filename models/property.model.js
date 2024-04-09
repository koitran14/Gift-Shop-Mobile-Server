const mongoose = require('mongoose'); // Erase if already required


// NOTE: không cần có thêm hàm main để catch vì nó sẽ báo ở index. 
// cũng không cần bỏ vào function main()

const propertySchema = new mongoose.Schema({
   typeOfProperties: {
        type: String,
        required: true,
        unique: true,
        index: true,
    },
})

module.exports = mongoose.model('Property', propertySchema);

// main().catch(err => console.log(err));
// // Declare the Schema of the Mongo model
// async function main() {
//     var userSchema = new mongoose.Schema({
//         typeOfProperties:{
//             type:String,
//             required:true,
//             unique:true,
//             index:true,
//         },
//     });
    
//     module.exports = mongoose.model('Property', userSchema);
// }
// //Export the model
