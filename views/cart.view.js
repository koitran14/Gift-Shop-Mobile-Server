const {getAll, create} = require('../controllers/cart')

module.exports = function(app) {
    app.get('/cart', getAll);
    app.post('/cart', create);
}