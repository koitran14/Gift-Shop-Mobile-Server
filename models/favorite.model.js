const mongoose = require('mongoose'); // Erase if already required

// Declare the Schema of the Mongo model
var favoriteSchema = new mongoose.Schema({
 
});

//Export the model
module.exports = mongoose.model('Favorite', favoriteSchema);