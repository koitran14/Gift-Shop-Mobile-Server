const {getAll, create} = require('../controllers/category')

module.exports = function(app) {
    app.get('/category', getAll);
    app.post('/category', create);
}