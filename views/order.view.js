const {getAll, create, getAllByUserId, } = require('../controllers/order')

module.exports = function(app) {
    app.get('/order', getAll);
    app.get('/order/:userId', getAllByUserId);

    app.post('/order/create', create);
}