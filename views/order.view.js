const {getAll} = require('../controllers/order')

module.exports = function(app) {
    app.get('/order', getAll);
}