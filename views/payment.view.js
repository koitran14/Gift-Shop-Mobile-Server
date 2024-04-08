const {getAll} = require('../controllers/payment')

module.exports = function(app) {
    app.get('/payment', getAll);
}