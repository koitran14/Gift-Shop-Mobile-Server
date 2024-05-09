const {getAll, create} = require('../controllers/payment')

module.exports = function(app) {
    app.get('/payment', getAll);
    app.post('/payment', create);
}