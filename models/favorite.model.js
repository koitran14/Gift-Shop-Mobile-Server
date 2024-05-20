const mongoose = require('mongoose'); // Erase if already required
const User = require('./user.model');
const Product = require('./product.model');
const Shop = require('./shop.model');

var favoriteSchema = new mongoose.Schema({
    user: User.schema,
    product: [Product.schema],
    shop: [Shop.schema]
});

module.exports = mongoose.model('Favorite', favoriteSchema);