const mongoose = require('mongoose'); // Erase if already required
const Product = require('./product.model').schema;
const Store = require('./store.model').schema;

var favoriteSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
    },
    product: [Product],
    store: [Store]
});

module.exports = mongoose.model('Favorite', favoriteSchema);