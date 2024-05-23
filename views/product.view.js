const {getAll, addProduct, addFeedback} = require('../controllers/product')

module.exports = function(app) {
    //GET ALL PRODUCTS
    app.get('/product', getAll);

    //ADD NEW PRODUCT
    app.post('/product/add-product', addProduct);
    app.post('/product/addFeedback/:productId', addFeedback);

}