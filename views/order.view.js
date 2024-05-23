const {getAll, create} = require('../controllers/order')

module.exports = function(app) {
    app.get('/order', getAll);
    app.post('/order/create', create);
}