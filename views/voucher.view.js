const {getAll, create} = require('../controllers/voucher')

module.exports = function(app) {
    app.get('/voucher', getAll);
    app.post('/voucher', create);
}