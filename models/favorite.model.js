const mongoose = require('mongoose'); // Erase if already required
const User = require('./user.model');
const Product = require('./product.model');
const Store = require('./store.model');

var favoriteSchema = new mongoose.Schema({
    user: User.schema,
    product: [Product.schema],
    store: [Store.schema]
});

module.exports = mongoose.model('Favorite', favoriteSchema);