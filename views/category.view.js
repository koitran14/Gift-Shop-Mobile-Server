const {getAll} = require('../controllers/category')

module.exports = function(app) {
    app.get('/category', getAll);
}