const {getAll, create, getAllByUserId, getTotalQuantitySold, } = require('../controllers/order')

module.exports = function(app) {
    app.get('/order', getAll);
    app.get('/order/user/:userId', getAllByUserId);
    app.get('/order/quantity/:productId', getTotalQuantitySold);

    app.post('/order/create', create);
}