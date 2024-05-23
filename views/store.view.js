const {getAll, addStore, getProduct, getCategories, getProductByCategory, getStoreByProductId, addProductByStoreId, addFollowerToStore, removeFollowerFromStore} = require('../controllers/store')

module.exports = function(app) {
    //GET ALL STORE
    app.get('/store', getAll);
    //ADD NEW STORE
    app.post('/store/add-store', addStore);
    //SHOW ALL PRODUCT IN STORE BY STORENAME
    app.get('/store/product', getProduct);
    //SHOW ALL CATEGORIES IN STORE BY STORENAME
    app.get('/store/categories', getCategories);
    //SHOW ALL PRODUCTS IN STORE BY CATEGORY
    app.get('/store/categories/product', getProductByCategory);
    
    app.get('/store/:productId', getStoreByProductId)

    app.post('/store/addProduct/:storeId', addProductByStoreId)
    app.post('/store/addFollower/:storeId', addFollowerToStore)
    app.post('/store/removeFollower/:storeId', removeFollowerFromStore)

}