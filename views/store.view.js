const {getAll, create} = require('../controllers/store')

module.exports = function(app) {
    app.get('/store', getAll);
    app.post('/store', create);
}