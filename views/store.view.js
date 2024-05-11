const {getAll, addStore, getProduct, getCategories} = require('../controllers/store')

module.exports = function(app) {
    //GET ALL STORE
    app.get('/store', getAll);
    //ADD NEW STORE
    app.post('/store/add-store', addStore);
    //SHOW ALL PRODUCT IN STORE BY STORENAME
    app.get('/store/product', getProduct);
    //SHOW ALL CATEGORIES IN STORE BY STORENAME
    app.get('/store/categories', getCategories);
}